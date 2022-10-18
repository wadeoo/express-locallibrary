const async=require('async');
const Author=require('../models/author');
const Book=require('../models/book');


exports.author_list=(req,res,next)=>{
    Author  
        .find()
        .sort([['family_name','ascending']])
        .exec(
            (error,list_authors)=>{
                if(error){
                    return next(error);
                }
                res.render('author_list'
                ,{title:'全部作者列表',author_list:list_authors});
            }
        );
};

exports.author_detail=(req,res,next)=>{
    async.parallel(
        {
            author:(callback)=>{
                Author.findById(req.params.id)
                        .exec(callback);
            },
            author_books:(callback)=>{
                Book.find({author: req.params.id})
                    .exec(callback);
            }
        },(error,results)=>{
            if(error){
                return next(error);
            }
            if(results.author==null){
                var error=new Error('找不到该作者');
                error.status=404;
                return next(error);
            }
            res.render('author_detail',{title:results.author.name
            ,author:results.author,author_books:results.author_books});
        }
    );
};

exports.author_create_get=(req,res)=>{
    res.send('作者创建表单的 get');
};

exports.author_create_post=(req,res)=>{
    res.send('作者创建表单的 post');
};

exports.author_delete_get=(req,res)=>{
    res.send('作者删除 post');
};

exports.author_delete_post=(req,res)=>{
    res.send('作者删除 get');
};

exports.author_update_get=(req,res)=>{
    res.send('作者更新 get');
};

exports.author_update_post=(req,res)=>{
    res.send('作者更新 post');
}