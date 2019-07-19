var db=require('../dbconnection');
var User={
    
    getAllUser:function(callback){
        return db.query("select * from signup",callback);
    },
    addUser:function(item,filename,filename1,callback){
        return db.query("insert into signup(firstname,lastname,email,dob,biodata,profile) values(?,?,?,?,?,?)",[item.first_name,item.last_name,item.email,item.birth_date,filename1,filename],callback);
    },
}
module.exports=User;