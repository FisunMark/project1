var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Работаем на Express',
  active0: "active",
  active1: "",
  active2: "",
  active3: "",
  active4: "",
  active5: "",
});
});

router.get('/hero1', function(req, res, next) {
  res.render('hero', { title: 'Это у нас заголовок',
  picture: "images/01.jpg",
  desc: "Первый текст",
  desc1: "Второй текст",
  active0: "",
  active1: "active",
  active2: "",
  active3: "",
  active4: "",
  active5: "",

});
});

router.get('/hero2', function(req, res, next) {
  res.render('hero', { title: 'Заголовок второй страницы!',
  picture: "images/02.jpg",
  desc: "Первый текст второй страницы",
  desc1:"Второй текст второй страницы",
  active0: "",
  active1: "",
  active2: "active",
  active3: "",
  active4: "",
  active5: "",
});
});

router.get('/hero3', function(req, res, next) {
  res.render('hero', { title: '<h1>Herrrroo</h1>',
  picture: "images/03.jpg",
  desc: "ytre",
  desc1:"",
  active0: "",
  active1: "",
  active2: "",
  active3: "active",
  active4: "",
  active5: "",
});
});


router.get('/hero4', function(req, res, next) {
  res.render('hero', { title: '<h1>Herrrroo</h1>',
  picture: "images/04.jpg",
  desc: "ytre",
  desc1:"",
  active0: "",
  active1: "",
  active2: "",
  active3: "",
  active4: "active",
  active5: "",
});
});


router.get('/hero5', function(req, res, next) {
  res.render('hero', { title: '<h1>Herrrroo</h1>',
  picture: "images/05.jpg",
  desc: "ytre",
  desc1:"",
  active0: "",
  active1: "",
  active2: "",
  active3: "",
  active4: "",
  active5: "active",
});
});



module.exports = router;
