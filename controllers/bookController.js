var Book=require('../models/book');
var Author=require('../models/author');
var Genre=require('../models/genre');
var BookInstance=require('../models/bookinstance');

var async=require('async');

exports.index=(req,res)=>{

    async.parallel({
        book_count:(callback)=>{
            Book.count({},callback);
        },
        book_instance_count:(callback)=>{
            BookInstance.count({},callback);
        },
        book_instance_available_count:(callback)=>{
            BookInstance.count({status: 'Available'},callback);
        },
        author_count:(callback)=>{
            Author.count({},callback);
        },
        genre_count:(callback)=>{
            Genre.count({},callback);
        }
    },(err,results)=>{
        res.render('index',{title: '图书馆主页',error: err, data: results});
    });
};

exports.book_list=(req,res,next)=>{
    Book.find({},'title author')
        .populate('author')
        .exec((error,list_books)=>{
            if(error){
                return next(error);
            }
            res.render('book_list',{title:'藏书列表', book_list: list_books});
            console.log(list_books[0].author.first_name);
        });
};

exports.book_detail=(req,res)=>{
    res.send('藏书详细信息'+req.params.id);
};

exports.book_create_get=(req,res)=>{
    res.send('创建藏书 get');
};

exports.book_create_post=(req,res)=>{
    res.send('创建藏书 post');
};

exports.book_update_get=(req,res)=>{
    res.send('更新藏书 get');
};

exports.book_update_post=(req,res)=>{
    res.send('更新藏书 post');
};

exports.book_delete_get=(req,res)=>{
    res.send('删除藏书 get');
};

exports.book_delete_post=(req,res)=>{
    res.send('删除藏书 post');
};