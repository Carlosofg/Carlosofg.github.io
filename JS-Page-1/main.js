import { cargarUsuarios} from './BaseDeDatos/DB Usuarios.js';  // CARGAR USUARIOS
import { cargarAdmins} from './BaseDeDatos/DB Admins.js'; // CARGAR ADMINS
import { funLogin } from './Login/Login.js';  // LOGIN USER
import { menuUser } from './Menus/menuUsuario.js';
import { menuAdmin } from './Menus/menuAdmin.js';

cargarUsuarios(); // CARGO USUARIOS
cargarAdmins(); // CARGO ADMINS 

let userLog = funLogin(); //LOGIN 

switch (userLog.rol) {

    case "Usuario":

        menuUser(userLog);
        break;
    
    case "Admin":

        menuAdmin(userLog);
        break;
}