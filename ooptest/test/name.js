function checkName(name){
    if(name.includes('@')){
        return "user";}
else if (name.includes('.')){
return "user";
}
else{
    return name;
}
    
}
module.exports=checkName;