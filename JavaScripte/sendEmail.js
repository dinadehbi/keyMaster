const allForm = document.querySelectorAll("form");
let btnSend = document.getElementById("send");
let rep1 = document.getElementById("response1");
let rep2 = document.getElementById("response2");
let rep3 = document.getElementById("response3");
let header = document.querySelector(".header");
let section2 = document.querySelector("#section2");
let section3 = document.querySelector("#section3");
let section4 = document.querySelector("#section4");
let btnValidate = document.getElementById("validate");
let btnchange = document.getElementById("change");


allForm.forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();
    });
});


//send email
btnSend.addEventListener("click", function(){
    const form = document.querySelector('#section2 form');
    let email = form.elements.email.value;
    let xml = new XMLHttpRequest();
    xml.open("POST", "../PHP/sendEmail.php", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send("email="+email);
    xml.onload = function (){
        if(xml.readyState === XMLHttpRequest.DONE){
            if(xml.status === 200){
                let data = JSON.parse(xml.response);
                console.log(data);
                if(data["rep"] == true){
                    console.log(data);
                    sessionStorage.setItem("data", JSON.stringify(data));
                    section2.style.display = "none";
                    section3.style.display = "block";
                    
                }else{
                    rep1.innerHTML = `<input type='text' disabled value="${data["rep"]}" style='background:#d64040e2; color:#fff;'>`;
                    console.log(data["rep"]);
                }
            }
        }
    }
})


//validate code
btnValidate.addEventListener("click", function(){
    const form = document.querySelector('#section3 form');
    let code = form.elements.code.value;
    let data = JSON.parse(sessionStorage.getItem("data"));
    let codeTrue = data["code"]
    console.log(data["code"]);
    let xml = new XMLHttpRequest();
    xml.open("POST", "../PHP/validate.php", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send("code="+code +"&codeTrue=" + codeTrue);
    xml.onload = function (){
        if(xml.readyState === XMLHttpRequest.DONE){
            if(xml.status === 200){
                if(xml.responseText.trim().toLowerCase() === "true"){
                    section3.style.display = "none";
                    section2.style.display = "none";
                    section4.style.display = "block";
                    console.log(xml.responseText);
                }else{
                    rep2.innerHTML = `<input type='text' disabled value="${xml.responseText}" style='background:#d64040e2; color:#fff;'>`;
                    console.log(xml.responseText);
                }
            }
        }
    }
    
})


//change password

btnchange.addEventListener("click", function(){
    const form = document.querySelector('#section4 form');
    let data = JSON.parse(sessionStorage.getItem("data"));
    let email = data["email"];
    let pass = form.elements.pass.value;
    let passConf = form.elements.passConf.value;
    let xml = new XMLHttpRequest();
    xml.open("POST", "../PHP/changePass.php", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send("pass="+pass +"&passConf="+passConf + "&email=" + email);
    xml.onload = function (){
        if(xml.readyState === XMLHttpRequest.DONE){
            if(xml.status === 200){
                if(xml.responseText.trim().toLowerCase() === "true"){
                    console.log(xml.responseText);
                    rep3.innerHTML = `<input type='text' disabled value="Password changed successfully" style='background:#1fc51fb1; color:#fff;'>`;
                }else{
                    rep3.innerHTML = `<input type='text' disabled value="${xml.responseText}" style='background:#d64040e2; color:#fff;'>`;
                    console.log(xml.responseText);
                }
            }
        }
    }
    
})