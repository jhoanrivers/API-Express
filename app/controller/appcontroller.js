'use strict';

var response = require('../res');
var conn = require('../config/db');


exports.getAllUser = function(req,res){
    conn.query('select * from user',
        function(error,rows,fields){
            if(error){
                console.log(error);
            }
            else{
                response.ok(rows,res);
            }
        })
}

exports.createUser = function(req,res){
    var name = req.body.name;
    var status = req.body.status;

    conn.query('insert into user (name,status) values(?,?)',[name,status],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("User created", res);
        }
    });
};

exports.getSingleUser = function(req,res){
    var id = req.params.id;

    conn.query('select * from user where id=?',[id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows,res);
        }
    });
};

exports.updateUser = function(req,res){
    var id = req.body.id;
    var name = req.body.name;
    var status = req.body.status;

    conn.query('update user set name=?,status=? where id=?',[name,status,id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok("Updated",res);
        }
    });
};


exports.deleteUser = function(req,res){
    var id = req.body.id;

    conn.query('delete from user where id=?',[id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok('Deleted',res);
        }

    });
};