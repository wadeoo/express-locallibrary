const BookInstance=require('../models/bookinstance');
const Book=require('../models/book');
const async=require('async');
const e = require('express');


exports.book_instance_list=(req,res,next)=>{
    BookInstance.find()
                .populate('book')
                .exec((error,list_book_instance)=>{
                    if(error){
                        return next(error);
                    }
                    res.render('book_instance_list'
                    ,{title:'藏书副本列表',book_instance_list:list_book_instance});
                });
};

exports.book_instance_detail=(req,res,next)=>{
    BookInstance.findById(req.params.id)
                .populate('book')
                .exec(
                    (error,book_instance)=>{
                        if(error){
                            return next(error);
                        }
                        if(book_instance==null){
                            var error=new Error('无法找到该副本');
                            error.status=404;
                            return next(error);
                        }
                        res.render('book_instance_detail',{
                            title:book_instance.book.title+' 副本',
                            book_instance:book_instance
                        });
                    }
                );
};

exports.book_instance_create_get=(req,res)=>{
    res.send('藏书副本创建 get');
};

exports.book_instance_create_post=(req,res)=>{
    res.send('藏书副本创建 post');
};

exports.book_instance_update_get=(req,res)=>{
    res.send('藏书副本更新 get');
};

exports.book_instance_update_post=(req,res)=>{
    res.send('藏书副本更新 post');
};

exports.book_instance_delete_get=(req,res)=>{
    res.send('藏书副本删除 get');
};

exports.book_instance_delete_post=(req,res)=>{
    res.send('藏书副本删除 post');
};