import { Usuario } from '../Clases/Usuario.js';

let dataBaseUsuarios = new Array(10);

function cargarUsuarios() {
   
    let user1 = new Usuario(
        "Valentina", 
        "Martinez", 
        45, 
        "a.rojas@tienda.com", 
        "val", 
        123, 
        101
    );

    let user2 = new Usuario(
        "Pedro", 
        "Soto", 
        38, 
        "psoto@tienda.com", 
        "psoto", 
        54321, 
        102
    );
    
    let user3 = new Usuario(
        "Carlos", 
        "Guevara", 
        21, 
        "carlos19@gmail.com", 
        "carlos19", 
        12345, 
        103
    );
    
    let user4 = new Usuario(
        "Sofía", 
        "Martínez", 
        28, 
        "smartinez@gmail.com", 
        "sofimar", 
        67890, 
        104
    );

    let user5 = new Usuario(
        "Miguel", 
        "Ramírez", 
        35, 
        "mramirez@yahoo.es", 
        "miguelito", 
        11223, 
        105
    );

    let user6 = new Usuario(
        "Laura", 
        "Castro", 
        19, 
        "lau.castro@hotmail.com", 
        "laurac", 
        44556, 
        106
    );

    let user7 = new Usuario(
        "Jorge", 
        "Mendoza", 
        50, 
        "jmendoza@outlook.com", 
        "jmen", 
        77889, 
        107
    );

    let user8 = new Usuario(
        "Paola", 
        "Díaz", 
        24, 
        "paola.diaz@gmail.com", 
        "paolad", 
        10020, 
        108
    );

    let user9 = new Usuario(
        "Gabriel", 
        "López", 
        40, 
        "glopez@tienda.com", 
        "glopez", 
        30303, 
        109
    );

    let user10 = new Usuario(
        "Andrés", 
        "Vera", 
        33, 
        "averas@gmail.com", 
        "averas", 
        20202, 
        110
    );
    
    dataBaseUsuarios[0] = user1;
    dataBaseUsuarios[1] = user2;
    dataBaseUsuarios[2] = user3;
    dataBaseUsuarios[3] = user4;
    dataBaseUsuarios[4] = user5;
    dataBaseUsuarios[5] = user6;
    dataBaseUsuarios[6] = user7;
    dataBaseUsuarios[7] = user8;
    dataBaseUsuarios[8] = user9;
    dataBaseUsuarios[9] = user10;
}

export { dataBaseUsuarios, cargarUsuarios};