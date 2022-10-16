const BookInstance=require('../models/bookinstance');


exports.book_instance_list=(req,res)=>{
    res.send("藏书副本列表");
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