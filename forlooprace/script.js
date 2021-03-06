let runners = {
    pedro() {
        min = Math.ceil(150);
        max = Math.floor(230);
        speed = Math.floor(Math.random() * (max - min + 1)) + min;
        return speed - (speed*0.03)
    },
    juca() {
        min = Math.ceil(120);
        max = Math.floor(260);
        speed = Math.floor(Math.random() * (max - min + 1)) + min;
        return speed - (speed*0.05)
    },
    edna() {
        min = Math.ceil(180);
        max = Math.floor(220);
        speed = Math.floor(Math.random() * (max - min + 1)) + min;
        return speed - (speed*0.01)
    },
    random() {
        minMin = Math.ceil(100);
        minMax = Math.floor(150);
        min = Math.floor(Math.random() * (minMax - minMin + 1)) + minMin;
        maxMin = Math.ceil(200);
        maxMax = Math.floor(280);
        max = Math.floor(Math.random() * (maxMax - maxMin + 1)) + maxMin;
        slideMin = Math.ceil(0.01);
        slideMax = Math.floor(0.08);
        slide = Math.floor(Math.random() * (slideMax - slideMin + 1)) + slideMin;
        speed = Math.floor(Math.random() * (max - min + 1)) + min;
        return speed - (speed*slide)
    }
}

function quickRace () {
    let runner1 = 0;
    let runner2 = 0;
    let runner3 = 0;
    let winner = "";
    for(i=0;i<10;i++) {
        pedroSpeed = runners.pedro();
        jucaSpeed = runners.juca();
        ednaSpeed = runners.edna();
        if (pedroSpeed>jucaSpeed && pedroSpeed>ednaSpeed) {
            runner1++;
        } else {
            if (jucaSpeed>pedroSpeed && jucaSpeed>ednaSpeed) {
                runner2++;
            } else {
                runner3++;
            }
        }
    }
    if (runner1>runner2 && runner1>runner3) {
        document.getElementById("first").innerHTML = "Pedro venceu!"
        winner = "pedro"
    } else {
        if (runner2>runner1 && runner2>runner3) {
            document.getElementById("first").innerHTML = "Juca venceu!"
            winner = "juca"
        } else {
            document.getElementById("first").innerHTML = "Edna venceu!"
            winner = "edna"
        }
    }
    if (winner=="pedro" && runner2>runner3) {
        document.getElementById("second").innerHTML = "Juca foi o segundo."
        document.getElementById("third").innerHTML = "Edna foi a terceira."
    } else {
        if (winner=="pedro" && runner3>runner2) {
        document.getElementById("second").innerHTML = "Edna foi a segunda."
        document.getElementById("third").innerHTML = "Juca foi o terceiro."
        }
    }
    if (winner=="juca" && runner1>runner3) {
        document.getElementById("second").innerHTML = "Pedro foi o segundo."
        document.getElementById("third").innerHTML = "Edna foi a terceira."
    } else {
        if (winner=="juca" && runner3>runner1) {
        document.getElementById("second").innerHTML = "Edna foi a segunda."
        document.getElementById("third").innerHTML = "Pedro foi o terceiro."
        }
    }
    if (winner=="edna" && runner1>runner2) {
        document.getElementById("second").innerHTML = "Pedro foi o segundo."
        document.getElementById("third").innerHTML = "Juca foi o terceiro."
    } else {
        if (winner=="edna" && runner2>runner1) {
        document.getElementById("second").innerHTML = "Juca foi o segundo."
        document.getElementById("third").innerHTML = "Pedro foi o terceiro."
        }
    }
}

function granPrix () {
    let runner1 = 0;
    let runner2 = 0;
    let runner3 = 0;
    let winner = "";
    for(i=0;i<70;i++) {
        pedroSpeed = runners.pedro();
        jucaSpeed = runners.juca();
        ednaSpeed = runners.edna();
        if (pedroSpeed>jucaSpeed && pedroSpeed>ednaSpeed) {
            runner1++;
        } else {
            if (jucaSpeed>pedroSpeed && jucaSpeed>ednaSpeed) {
                runner2++;
            } else {
                runner3++;
            }
        }
    }
    if (runner1>runner2 && runner1>runner3) {
        document.getElementById("first").innerHTML = "Pedro venceu!"
        winner = "pedro"
    } else {
        if (runner2>runner1 && runner2>runner3) {
            document.getElementById("first").innerHTML = "Juca venceu!"
            winner = "juca"
        } else {
            document.getElementById("first").innerHTML = "Edna venceu!"
            winner = "edna"
        }
    }
    if (winner=="pedro" && runner2>runner3) {
        document.getElementById("second").innerHTML = "Juca foi o segundo."
        document.getElementById("third").innerHTML = "Edna foi a terceira."
    } else {
        if (winner=="pedro" && runner3>runner2) {
        document.getElementById("second").innerHTML = "Edna foi a segunda."
        document.getElementById("third").innerHTML = "Juca foi o terceiro."
        }
    }
    if (winner=="juca" && runner1>runner3) {
        document.getElementById("second").innerHTML = "Pedro foi o segundo."
        document.getElementById("third").innerHTML = "Edna foi a terceira."
    } else {
        if (winner=="juca" && runner3>runner1) {
        document.getElementById("second").innerHTML = "Edna foi a segunda."
        document.getElementById("third").innerHTML = "Pedro foi o terceiro."
        }
    }
    if (winner=="edna" && runner1>runner2) {
        document.getElementById("second").innerHTML = "Pedro foi o segundo."
        document.getElementById("third").innerHTML = "Juca foi o terceiro."
    } else {
        if (winner=="edna" && runner2>runner1) {
        document.getElementById("second").innerHTML = "Juca foi o segundo."
        document.getElementById("third").innerHTML = "Pedro foi o terceiro."
        }
    }
}

function enduro () {
    let runner1 = 0;
    let runner2 = 0;
    let runner3 = 0;
    let winner = "";
    for(i=0;i<160;i++) {
        pedroSpeed = runners.pedro();
        jucaSpeed = runners.juca();
        ednaSpeed = runners.edna();
        if (pedroSpeed>jucaSpeed && pedroSpeed>ednaSpeed) {
            runner1++;
        } else {
            if (jucaSpeed>pedroSpeed && jucaSpeed>ednaSpeed) {
                runner2++;
            } else {
                runner3++;
            }
        }
    }
    if (runner1>runner2 && runner1>runner3) {
        document.getElementById("first").innerHTML = "Pedro venceu!"
        winner = "pedro"
    } else {
        if (runner2>runner1 && runner2>runner3) {
            document.getElementById("first").innerHTML = "Juca venceu!"
            winner = "juca"
        } else {
            document.getElementById("first").innerHTML = "Edna venceu!"
            winner = "edna"
        }
    }
    if (winner=="pedro" && runner2>runner3) {
        document.getElementById("second").innerHTML = "Juca foi o segundo."
        document.getElementById("third").innerHTML = "Edna foi a terceira."
    } else {
        if (winner=="pedro" && runner3>runner2) {
        document.getElementById("second").innerHTML = "Edna foi a segunda."
        document.getElementById("third").innerHTML = "Juca foi o terceiro."
        }
    }
    if (winner=="juca" && runner1>runner3) {
        document.getElementById("second").innerHTML = "Pedro foi o segundo."
        document.getElementById("third").innerHTML = "Edna foi a terceira."
    } else {
        if (winner=="juca" && runner3>runner1) {
        document.getElementById("second").innerHTML = "Edna foi a segunda."
        document.getElementById("third").innerHTML = "Pedro foi o terceiro."
        }
    }
    if (winner=="edna" && runner1>runner2) {
        document.getElementById("second").innerHTML = "Pedro foi o segundo."
        document.getElementById("third").innerHTML = "Juca foi o terceiro."
    } else {
        if (winner=="edna" && runner2>runner1) {
        document.getElementById("second").innerHTML = "Juca foi o segundo."
        document.getElementById("third").innerHTML = "Pedro foi o terceiro."
        }
    }
}

function customRace () {
    let runner1 = 0;
    let runner2 = 0;
    let runner3 = 0;
    let winner = "";
    let laps = document.getElementById("custom").value;
    for(i=0;i<laps;i++) {
        pedroSpeed = runners.pedro();
        jucaSpeed = runners.juca();
        ednaSpeed = runners.edna();
        if (pedroSpeed>jucaSpeed && pedroSpeed>ednaSpeed) {
            runner1++;
        } else {
            if (jucaSpeed>pedroSpeed && jucaSpeed>ednaSpeed) {
                runner2++;
            } else {
                runner3++;
            }
        }
    }
    if (runner1>runner2 && runner1>runner3) {
        document.getElementById("first").innerHTML = "Pedro venceu!"
        winner = "pedro"
    } else {
        if (runner2>runner1 && runner2>runner3) {
            document.getElementById("first").innerHTML = "Juca venceu!"
            winner = "juca"
        } else {
            document.getElementById("first").innerHTML = "Edna venceu!"
            winner = "edna"
        }
    }
    if (winner=="pedro" && runner2>runner3) {
        document.getElementById("second").innerHTML = "Juca foi o segundo."
        document.getElementById("third").innerHTML = "Edna foi a terceira."
    } else {
        if (winner=="pedro" && runner3>runner2) {
        document.getElementById("second").innerHTML = "Edna foi a segunda."
        document.getElementById("third").innerHTML = "Juca foi o terceiro."
        }
    }
    if (winner=="juca" && runner1>runner3) {
        document.getElementById("second").innerHTML = "Pedro foi o segundo."
        document.getElementById("third").innerHTML = "Edna foi a terceira."
    } else {
        if (winner=="juca" && runner3>runner1) {
        document.getElementById("second").innerHTML = "Edna foi a segunda."
        document.getElementById("third").innerHTML = "Pedro foi o terceiro."
        }
    }
    if (winner=="edna" && runner1>runner2) {
        document.getElementById("second").innerHTML = "Pedro foi o segundo."
        document.getElementById("third").innerHTML = "Juca foi o terceiro."
    } else {
        if (winner=="edna" && runner2>runner1) {
        document.getElementById("second").innerHTML = "Juca foi o segundo."
        document.getElementById("third").innerHTML = "Pedro foi o terceiro."
        }
    }
}