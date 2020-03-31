const button = document.getElementById('submit_encode');
const inputString = document.getElementById('inputString');
const outputString = document.getElementById('outputString');
const error_message = document.getElementById('error_message');

button.addEventListener('click', function (e) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                outputString.innerHTML = this.response;
            }
            else if (this.status === 401) {
                error_message.innerHTML = "Error: " + this.response;
            }
        }
    };
    xhttp.open("POST", "/encoder", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("authorization", token);
    const json_data = {
        'inputString': inputString.value
    };
    xhttp.send(JSON.stringify(json_data));
});