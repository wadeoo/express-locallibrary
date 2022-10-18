const BookInstance=require('../models/bookinstance');
const Book=require('../models/book');


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

exports.book_instance_detail=(req,res)=>{
    res.send('藏书副本详细信息'+req.params.id);
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