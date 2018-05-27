//sql语句映射文件，供api逻辑调用
var sqlMap = {
  user: {
    addUser: 'insert into user(id,username,password) values (0,?,?)',
    addBlog: 'insert into blog(id,name,title,intro,text) values (0,?,?,?,?)',
    addMsg:'insert into msg(id,name,message) values (0,?,?)',
    select_name: 'select * from user where username=?',
    select_password: 'select * from user where password=?',
    select_blog:'select * from msg'
  }
};
module.exports = sqlMap;
