const togglePasswordIcons = document.querySelectorAll('.toggle-password');
        
togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = document.querySelector(`#${this.getAttribute('data-toggle')}`);
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
        this.classList.toggle('fa-eye');
    });
});

const myForm = document.getElementById('signupForm');
const myForm2 = document.getElementById('signinForm');

const Ereur = document.getElementById('Ereur');
const signUpButton = document.getElementById("signup");
const signInButton = document.getElementById("signinButton");

signUpButton.addEventListener("click",function(){

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('../PHP/user.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data[0] == "true") {
            console.log(data[0]);
            // sessionStorage.setItem("username", JSON.stringify(data[1]));
            window.location.href="../HTML/signin.html";
            

        }else {
            
            Ereur.style.display="block";
            Ereur.innerHTML = data[0];
            console.log(data[0]);
            
            }
            
            
    })
    .catch(error => {
        console.log('Error:', error);
    });
});
})






