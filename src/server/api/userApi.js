var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);
var arr = [];
conn.connect();
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加博客接口
router.post('/addBlog', (req, res) => {
  var sql = $sql.user.addBlog;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.name, params.title, params.intro, params.text], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});


router.post('/search', (req, res) => {
  var arr = [];
  var sql = $sql.user.select_blog;
  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(err)
    }
    if (rows) {
      for (var i = 0; i < rows.length; i++) {
        arr[i] = rows[i];
      }
      res.send(arr);
    }
  })
});
router.post('/login', (req, res) => {
  var sql_name = $sql.user.select_name;
  var sql_password = $sql.user.select_password;
  var params = req.body;
  conn.query(sql_name, params.username, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result[0] === undefined) {
      res.send('-1')
    } else {
      conn.query(sql_password, params.password, function () {
        if (err) {
          console.log(err)
        }
        if (result[0] === undefined) {
          res.send('0')    //username正确后，password错误，data返回 0
        } else {
          jsonWrite(res, result)
        }
      })
    }
  })
});


module.exports = router;
