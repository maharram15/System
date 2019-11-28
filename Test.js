'use strict'
let btn = false;

function show() {
    if (password.type == 'text') {
        password.type = 'password'
    } else password.type = 'text';
}

function chg() {
    let element = document.getElementById("img2");
    if (btn) {
        btn = false;
        element.src = 'invisible.png';
    } else {
        btn = true;
        element.src = 'eye.png';
    }
};

function check() {
    let pass = document.getElementById("password").value;
    if (pass.length == 0) {
        alert("Sifreni yazin.");
    }
    if (pass.length >= 2) {
        dv.style.backgroundColor = "green";
    }
    if (pass.length >= 5) {
        dv1.style.backgroundColor = "green";
    }
    if (pass.length >= 8) {
        dv2.style.backgroundColor = "green";
    }
};