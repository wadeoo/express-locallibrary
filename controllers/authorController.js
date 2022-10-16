const Author=require('../models/author');


exports.author_list=(req,res)=>{
    res.send('作者列表');
};

exports.author_detail=(req,res)=>{
    res.send('作者详细信息: '+req.params.id);
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