const home = document.body;
const token = localStorage.getItem('authorization');

window.addEventListener('load', function (e) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                home.outerHTML = this.response;
                let script = document.createElement("script");
                script.setAttribute("src", "get_home.js")
                document.head.appendChild(script)
            }
            else if (this.status === 401) {
                home.innerHTML = "Error: " + this.response;
            }
        }
    };
    xhttp.open("GET", "/get_home", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("authorization", token);
    xhttp.send()
});
