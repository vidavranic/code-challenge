const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('submit_button');
const error_message = document.getElementById('error_message');

button.addEventListener('click', function (e) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                localStorage.setItem('authorization', JSON.parse(this.response).token);
                window.location.href = '/home';
            }
            else if (this.status === 401) {
                error_message.innerHTML = this.response;
            }
        }
    };
    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    const json_data = {
        'email': email.value,
        'password': password.value
    };
    xhttp.send(JSON.stringify(json_data));
});