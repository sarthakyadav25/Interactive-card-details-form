//Element defination

const  n = document.getElementsByName("cnum")[0];
const month = document.getElementById("month");
const cvc = document.getElementById("cvcnum");
const cname = document.getElementById("card-name");
const input_name = document.getElementById("inpname");
const year = document.getElementById("year");
const cardexp = document.getElementById("card-exp");
const cardcvc = document.getElementById("cvc");
const cardnum = document.getElementById("card-num");
const blank = document.createElement('p');

  //blank paragraph
blank.innerText = "Can't be blank";
blank.style = "color:red;font-size:0.5rem;margin:0;padding:0;transition:all 0.3s;";

  //wrong format para
const format = document.createElement('p');
format.innerText = "Wrong format,number only";
format.style = "color:red;font-size:0.5rem;margin:0;padding:0;transition:all 0.3s;";


//Events and functions

window.addEventListener("resize",()=>{
    const image = document.getElementById("main-img");
    const isSmallScreen = window.matchMedia("(max-width: 675px)").matches;
    
    if (isSmallScreen) {
      image.src = "/images/bg-main-mobile.png";
    } else {
      image.src = "/images/bg-main-desktop.png";
    }

})

n.addEventListener('keyup',()=>{
    var regEx = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    if(n.value.length == 0){
        n.after(blank);
        format.remove();
        cardnum.innerText = "0000000000000000";
    }
    else if(n.value.match(regEx)){
        blank.remove();
    }
    else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(n.value[n.value.length-1])){
        n.after(format);
        blank.remove();
    }
    else{
        blank.remove();
        format.remove();
        cardnum.innerText = n.value;
    }
})

month.addEventListener("keyup",()=>{
    yearval = year.value;
    if(yearval == ""){yearval = "00"}
    if(month.value.length == 0){
        year.after(blank);
        format.remove();
        cardexp.innerText = "00" + "/" + yearval;
    }
    else if("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(month.value[month.value.length-1] || month.value.length > 2)){
        year.after(format);
        blank.remove();
    }
    else{
        format.remove();
        blank.remove();
        cardexp.innerText = month.value + "/" + yearval;


    }
})

year.addEventListener("keyup",()=>{
    monthval = month.value;
    if(monthval == ""){monthval = "00"};
    if(year.value.length == 0){
        year.after(blank);
        format.remove();
        cardexp.innerText = monthval + "/" + "00";
    }
    else if("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(year.value[year.value.length-1] || year.value.length > 2)){
        year.after(format);
        blank.remove();
    }
    else{
        format.remove();
        blank.remove();
        cardexp.innerText = monthval + "/" + year.value;
    }
})

cvc.addEventListener("keyup",()=>{
    if(cvc.value.length == 0){
        cvc.after(blank);
        format.remove();
        cardcvc.innerText = "000";
    }
    else if("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(cvc.value[cvc.value.length-1])){
        cvc.after(format);
        blank.remove();
    }
    else{
        format.remove();
        blank.remove();
        cardcvc.innerText = cvc.value;
    }
})

input_name.addEventListener("keyup",()=>{
    if(input_name.value == ""){
        cname.innerText = "Jane Appleseed";
    }
    else{

        cname.innerText = input_name.value;
    }
})
