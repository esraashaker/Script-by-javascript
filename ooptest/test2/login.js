function checkName(userName){
    if(userName.includes('@')){
        return "should enter valid name";}
else if (userName.includes('.')){
return  "should enter valid name";}

else{
    return userName;
}
    
}
module.exports=checkName;