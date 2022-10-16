const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const AuthorSchema=new Schema(
    {
        first_name:{type:String, required:true, max:100},
        family_name:{type:String, required:true, max:100},
        date_of_birth:{type:Date},
        date_of_death:{type:Date},
    }
);

//虚拟属性
AuthorSchema
    .virtual('name')
    .get(
        ()=>this.family_name+', '+this.first_name
    );


//虚拟属性
AuthorSchema
    .virtual('lifespan')
    .get(
        ()=>(this.date_of_death.getYear()-this.date_of_birth.getYear()).toString()
    );


//虚拟属性
AuthorSchema
    .virtual('url')
    .get(
        ()=>'/catalog/author/'+this._id
    )

module.exports=mongoose.model('Author',AuthorSchema);