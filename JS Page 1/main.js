import { cargarUsuarios, dataBaseUsuarios } from './BaseDeDatos/DB Usuarios.js';  // CARGAR USUARIOS
import { cargarAdmins, dataBaseAdmins } from './BaseDeDatos/DB Admins.js'; // CARGAR ADMINS
import { funLogin } from './Login/Login.js';  // LOGIN USER
import { menuUser } from './Menus/menuUsuario.js';

cargarUsuarios(); // CARGO USUARIOS
cargarAdmins(); // CARGO ADMINS 

let userLog = funLogin(); //LOGIN 

switch (userLog.rol) {

    case "Usuario":

        menuUser(userLog);
        break;



        
        




}