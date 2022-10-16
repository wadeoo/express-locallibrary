const Genre=require('../models/genre');


exports.genre_list=(req,res)=>{
    res.send('藏书种类列表');
};

exports.genre_detail=(req,res)=>{
    res.send('藏书种类详情'+req.params.id);
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