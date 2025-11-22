import { Admin } from '../Clases/Admin.js';

let dataBaseAdmins = new Array(10);

function cargarAdmins() {

    let admin1 = new Admin(
        "Carlos",
        "Lopez",
        40,
        "ana.torres@admin.com",
        "cj",
        123,
        201
    );
    let admin2 = new Admin(
        "Sergio",
        "Ramos",
        45,
        "sergio.ramos@admin.com",
        "sergioR",
        22222,
        202
    );
    let admin3 = new Admin(
        "Lucia",
        "Diaz",
        29,
        "lucia.diaz@admin.com",
        "luciaD",
        33333,
        203
    );
    let admin4 = new Admin(
        "Mateo",
        "Blanco",
        33,
        "mateo.blanco@admin.com",
        "mateoB",
        44444,
        204
    );
    let admin5 = new Admin(
        "Sofia",
        "Ruiz",
        28,
        "sofia.ruiz@admin.com",
        "sofiaR",
        55555,
        205
    );
    let admin6 = new Admin(
        "Carlos",
        "Lopez",
        25,
        "carlos.lopez@admin.com",
        "carlosL",
        66666,
        206
    );
    let admin7 = new Admin(
        "Julia",
        "Mendez",
        31,
        "julia.mendez@admin.com",
        "juliaM",
        77777,
        207
    );
    let admin8 = new Admin(
        "Roberto",
        "Silva",
        38,
        "roberto.silva@admin.com",
        "robertoS",
        88888,
        208
    );
    let admin9 = new Admin(
        "Elena",
        "Suarez",
        27,
        "elena.suarez@admin.com",
        "elenaS",
        99999,
        209
    );
    let admin10 = new Admin(
        "Nicolas",
        "Vega",
        34,
        "nicolas.vega@admin.com",
        "nicolasV",
        1,
        210
    );

    dataBaseAdmins[0] = admin1;
    dataBaseAdmins[1] = admin2;
    dataBaseAdmins[2] = admin3;
    dataBaseAdmins[3] = admin4;
    dataBaseAdmins[4] = admin5;
    dataBaseAdmins[5] = admin6;
    dataBaseAdmins[6] = admin7;
    dataBaseAdmins[7] = admin8;
    dataBaseAdmins[8] = admin9;
    dataBaseAdmins[9] = admin10;
}

export { dataBaseAdmins, cargarAdmins};