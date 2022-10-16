const Book=require('../models/book');

exports.index=(req,res)=>{
    res.send('网站首页');
};

exports.book_list=(req,res)=>{
    res.send('藏书列表');
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