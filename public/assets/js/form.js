var create_acc = document.querySelector(".create_acc");
var main_pages = document.querySelectorAll(".main");
var next_page = document.querySelector(".next_page");
var back_page = document.querySelectorAll(".back_page");
var submit_page = document.querySelector(".submit_page");
var testa = document.querySelector(".testa");
var shown_name = document.querySelector(".shown_name");
let formnumber=0;
create_acc.onclick=function(){
    if(!validateform()){
        return false;
    }
    formnumber++;
    updateform();
}
next_page.onclick=function(){
    if(!validateform()){
        return false;
    }
    formnumber++;
    updateform();
}
testa.onclick=function(){
    if(!validateform()){
        return false;
    }
    formnumber++;
    updateform();
}
back_page.forEach(function(back){
    back.onclick=function(){
    
    formnumber--;
    updateform();
}
});


function updateform(){
    main_pages.forEach(function(page){
        page.classList.add('hidden');
        page.classList.remove('block');
    });
    main_pages[formnumber].classList.remove('hidden');
    main_pages[formnumber].classList.add('block');
}
function validateform(){
    var validate=true;
    var inputs=document.querySelectorAll(".main.block input");
    inputs.forEach(function(e){
       e.classList.remove('warning');
       if(e.hasAttribute('require')){
           if(e.value.length=="0"){ 
               validate=false;
               e.classList.add('warning')  
           }
       }
       
    });
    return validate;
}

