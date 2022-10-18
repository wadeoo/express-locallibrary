const mongoose=require('mongoose');
const Genre=require('../models/genre');
var Book =require('../models/book');
var async=require('async');


exports.genre_list=(req,res,next)=>{
    Genre.find()
        .sort([['name','ascending']])
        .exec((error,list_genres)=>{
            if(error){
                return next(error);
            }
            res.render('genre_list',{title:'藏书种类清单'
        ,genre_list:list_genres});
        });
};

exports.genre_detail=(req,res,next)=>{
    async.parallel(
        {
            genre:(callback)=>{
                Genre.findById(mongoose.Types.ObjectId(req.params.id))
                    .exec(callback);
            },
            genre_books:(callback)=>{
                Book.find({genre: mongoose.Types.ObjectId(req.params.id)})
                    .exec(callback);
            }
        },(error,results)=>{
            if(error){
                return next(error);
            }
            if(results.genre==null){
                var error=new Error('您要访问的藏书种类不在了');
                error.status=404;
                return next(error);
            }
            res.render('genre_detail',{
                genre:results.genre,
                genre_books:results.genre_books
            });
        }
    );
};

exports.genre_create_get=(req,res)=>{
    res.send('藏书种类创建 get');
};

exports.genre_create_post=(req,res)=>{
    res.send('藏书种类创建 post');
};

exports.genre_update_get=(req,res)=>{
    res.send('藏书种类更新 get');
};

exports.genre_update_post=(req,res)=>{
    res.send('藏书种类更新 post');
};

exports.genre_delete_get=(req,res)=>{
    res.send('藏书种类删除 get');
};

exports.genre_delete_post=(req,res)=>{
    res.send('藏书种类删除 post');
};