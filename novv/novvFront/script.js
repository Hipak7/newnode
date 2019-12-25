var obj={
    userData:function(){
        value=12;
        console.log(this.value)
    }.bind(this)
}
obj.testF();
var obj={
    userData:()=>{
        value=12;
        console.log(this.value)
    }}
    obj.testF();
}