var navLink=document.getElementsByClassName("nav-link");
for(var i=0;i<navLink.length;i++){
    navLink[i].addEventListener('click',myfct,false);
}
function doByClass(className,callback){
let collection=document.getElementsByClassName(className);
for(let i=0;i<collection.length;i++){
    callback(collection[i]);
}
}

function myfct(){
function removePadding(sec){
    sec.style.paddingTop="0px";
}  
    var S=this.dataset.secid;
    var sec=document.getElementById(S);
    //var secs=document.getElementsByClassName("main-section");
    doByClass("main-section",removePadding);
    sec.style.paddingTop="100px";
  console.log(S);

}