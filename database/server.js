const express = require('express');
const app = express();
//var bodyParser = require('body-parser');
var mysql = require('mysql');
var inf = require('./database_inf.json');
const port = 10030;

/*
app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended : false})); //to support URL-encoded bodies
*/
var connection = mysql.createConnection({
  host:inf._host,
  user:inf._user,
  password:inf._password,
  database:inf._user
});
connection.connect(function(err){
  if(err) throw err;
  console.log("connect");
  //user_test 
  
  /*
  var sql="CREATE TABLE user_test (account VARCHAR(255), passwd VARCHAR(255), username VARCHAR(255))";
  connection.query(sql,function(err,result){
    if(err) throw err;
    console.log("table");
  });
  */
/*
  var sql="CREATE TABLE user (name VARCHAR(255), hobby VARCHAR(255))";
  connection.query(sql,function(err,result){
    if(err) throw err;
    console.log("table");
  });
*/
/*
  var sql="INSERT INTO user (name, hobby) VALUES ('polarbear', 'sleep')";
  connection.query(sql,function(err,result){
    if(err) throw err;
    console.log("insert");
  });
*/
i/*
  var sql="SELECT * FROM user";
  connection.query(sql,function(err,result,field){
    if(err) throw err;
    console.log(result);
  });
*/
/*
  var sql="SELECT * FROM user WHERE hobby = 'sleep'";
  connection.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
  });
*/
/*
  var sql="DELETE FROM user WHERE name = 'polarbear'";
  connection.query(sql,function(err,result){
    if(err) throw err;
    console.log("delete");
  });
*/
/*
  var sql="DROP TABLE user";
  connection.query(sql,function(err,result){
    if(err) throw err;
    console.log("Table deleted");
  });
*/
connection.end();
});
app.listen(port);
