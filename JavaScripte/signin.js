
const myForm2 = document.getElementById('signinForm');
const signInButton = document.getElementById("signinButton");


signInButton.addEventListener("click", function(){
    myForm2.addEventListener('submit', function(e) {
        e.preventDefault();
        var formData2 = new FormData(this);

        fetch('../PHP/keymasterlogin.php', {
            method: 'POST',
            body: formData2
        })
        .then(response2 => {
            if (!response2.ok) {
                alert('Network response was not ok');
            }
            return response2.json();
        })
        .then(data=> {
            
            console.log(data)
            if (data.msg == 'true') {
                 sessionStorage.setItem("username", data.user);
                 window.location.href="../HTML/home.html";

            }else {
                Ereur.style.display="block";
                Ereur.innerHTML = data[0];
            }
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
})

