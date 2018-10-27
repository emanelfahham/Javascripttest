const express = require('express');
const router = express.Router();

// Article Model
let Article = require('../models/article');

// User Model
let User = require('../models/user');


// Add article route
router.get('/add', ensureAuthenticated , function(req, res){
    res.render('add_article',{
        title: 'Add Article'
    });
});

// Post Route
router.post("/add", function (req, res) {
    let article = new Article();
    article.title = req.body.title;
    article.author = req.user._id;
    article.body = req.body.body;
    article.save(function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('/')
        }
    });
});
// Post Route
// router.post("/add", ensureAuthenticated, function (req, res) {
//     let article = new Article();
//     article.title = req.body.title;
//     article.author = req.body.author;
//     article.body = req.body.body;
//     article.save(function (err) {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             res.redirect('/')
//         }
//     });
// });

// Get single article
router.get("/:id", function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        User.findById(article.author, function(err, user){
            res.render('article', {
                article: article,
                author: user.name

        })
       
        });
    });
});

// Edit Single article
router.get("/edit/:id", function (req, res) {
    Article.findById(req.params.id, function (err, article) {
          res.render('edit_article', {
              article: article,
          
      });  
        
    });
});
// // Edit Single article
// router.get("/edit/:id", ensureAuthenticated, function (req, res) {
//     Article.findById(req.params.id, function (err, article) {
//     User.findById(article.author, function (err, user) {
    
//         res.render('edit_article', {
//             article: article,
//             author: user.name
        
//         });

//     });
// });

// Update Article
router.post("/edit/:id", function (req, res) {
    let article = {};
    article.title = req.body.title;
    article.author = req.body._id;
    article.body = req.body.body;
    let query = { _id: req.params.id }
    Article.updateOne(query, article, function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('/')
        }
    });
});
// Delete route

router.get('/delete/:id', function (req, res) {
    Article.findByIdAndRemove(req.params.id, function (err, book) {
        res.redirect('/');
    });
});
// Delete route

// router.get('/delete/:id', ensureAuthenticated, function (req, res) {
//     if(!req.user._id){
//          res.status(500).send();
//     }
//     let query = {_id:req.params.id}
//       Article.findById(req.params.id, function(err, article){
//     if(article.authore != req.user._id){
//       Article.remove(query, function(err){
//     if(err){
//         console.log(err);
//     }
//     res.send('success');
// })
// }
//     })


function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else{
        res.redirect('/users/login');
    }
}






module.exports = router;