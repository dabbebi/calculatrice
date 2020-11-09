var rem = false;
var operateur = "";
var res2 = 0;
var vir = true;
var i = 0;

function ecrire(n) {
    var r = parseFloat(document.getElementById("result").value);
    if (operateur == "=") {
        operateur = "";
        document.getElementById("result").value = 0;
    }
    if (vir == true) {
        if (rem == true) {
            document.getElementById("result").value = n;
            rem = false;
        } else {
            document.getElementById("result").value = r * 10 + n;
        }
    } else {
        if (n == 0) {
            document.getElementById("result").value = document.getElementById("result").value + '' + '0';
            i++;
        } else {
            i++;
            document.getElementById("result").value = r + (n / (10 ** i));

        }
    }
}

function del() {
    var r = parseFloat(document.getElementById("result").value);
    if (vir == true) {
        document.getElementById("result").value = (r - (r % 10)) / 10;
    } else {
        if (i == 0) {
            document.getElementById("result").value = parseInt(document.getElementById("result").value);
            vir = true;
        } else if (i == 1) {
            i--;
            document.getElementById("result").value = parseInt(document.getElementById("result").value) + '' + '.';
        } else {
            i--;
            document.getElementById("result").value = (parseInt(parseFloat(document.getElementById("result").value) * (10 ** i))) / (10 ** i);

        }
    }
}


function calculer(op) {
    var res = parseFloat(document.getElementById("result").value);

    if (rem == false) {
        if (operateur == "+" || operateur == "") {
            document.getElementById("result").value = parseFloat(res2) + parseFloat(res);
            rem = true;
            res2 = document.getElementById("result").value;
            vir = true;
            i = 0;
        } else if (operateur == "-" || operateur == "") {
            document.getElementById("result").value = parseFloat(res2) - parseFloat(res);
            rem = true;
            res2 = document.getElementById("result").value;
            vir = true;
            i = 0;
        } else if (operateur == "*" || operateur == "") {
            document.getElementById("result").value = parseFloat(res2) * parseFloat(res);
            rem = true;
            res2 = document.getElementById("result").value;
            vir = true;
            i = 0;
        } else if (operateur == "/" || operateur == "") {
            document.getElementById("result").value = parseFloat(res2) / parseFloat(res);
            rem = true;
            res2 = document.getElementById("result").value;
            vir = true;
            i = 0;
        } else if (operateur == "%" || operateur == "") {
            document.getElementById("result").value = parseInt(res2) % parseInt(res);
            rem = true;
            res2 = document.getElementById("result").value;
            vir = true;
            i = 0;
        }
    }
    operateur = op;
    if (op == "=") {
        res2 = 0;
        i = 0;
    }
}

function ce() {
    document.getElementById("result").value = 0;
    rem = false;
    operateur = "";
    res2 = 0;
    vir = true;
    i = 0;
}

function invsigne() {
    document.getElementById("result").value = parseFloat(document.getElementById("result").value) * (-1);
}

function virgule() {
    if (vir == true) {
        if (rem == true) {
            document.getElementById("result").value = "0."
            vir = false;
            rem = false;
        } else {
            document.getElementById("result").value = document.getElementById("result").value + '.';
            vir = false;
        }
    }
}