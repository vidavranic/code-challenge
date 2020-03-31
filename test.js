console.log("Test start");
const http = require('http');
let token = null;

const options = {
    port: '3000',
    path: '/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};
const json_data ={
    "email":"optimus.prime@autobots.com",
    "password":"validPassword1234!"
};
const string_array = [
    "xxc",
    "vbb",
    "XXXYYYYZZQXX",
    "stop"
];
const out_string_array = [
    "x2c1",
    "v1b2",
    "X3Y4Z2Q1X2",
];

let i = 0;
const encoder_1 = function () {
    encoder("", null); //prvo test za prazan string
    while(string_array[i]) {//nakon toga test za stringove iz polja string_array osim "stop" (kod "stop" se testira null i poziva još jednom test na objektu
        encoder(string_array[i], out_string_array[i]);
        i++;
    }
};

const encoder = function (s, t) {
    let json_1 = null;
    if(s !== "stop"){ //"stop" znači da radim test sa null i zovem encoder još jednom sa objektom koji nije string
        json_1 = {
            "inputString": s,
        };
    }
    const options_encoder = {
        port: '3000',
        path: '/encoder',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token
        }
    };
    const req_encoder = http.request(options_encoder, (res) => {
        let output = null;
        res.on('data', (chunk) => {
            output = chunk.toString();
        });
        res.on('end', () => {
            if( res.statusCode < 400 && (output !== null || s === "" )) {
                if(output === t) {
                    console.log(s,"-->",output, "OK!")
                }
                else {
                    console.log(s, "Not ok!")
                }
            }
            else {
                console.log("Error page for", json_1, ". OK!")
            }
            if(s === "stop") {
                encoder({"test": "object"})
            }
            if(s.test !== undefined) {
                return console.log("Test end");
            }

        });
    });

    req_encoder.on('error', (e) => {
        console.error(`Error: ${e.message}`);
    });
    req_encoder.write(JSON.stringify(json_1));
    req_encoder.end();
};

const req_login = http.request(options, (res) => {
    let tmp = null;
    res.on('data', (chunk) => {
        tmp = chunk;
    });
    res.on('end', () => {
        if( res.statusCode < 400 && tmp !== null && JSON.parse(tmp).token !== undefined ) {
            console.log("Login OK");
            token = JSON.parse(tmp).token;
            encoder_1();
        }
    });
});

req_login.on('error', (e) => {
    console.error(`Authorization problem: ${e.message}`);
});
req_login.write(JSON.stringify(json_data));
req_login.end();

