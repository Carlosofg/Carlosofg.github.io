import { dataBaseUsuarios } from '../BaseDeDatos/DB Usuarios.js';
import { dataBaseAdmins } from '../BaseDeDatos/DB Admins.js';


export function funLogin() {

    let loginAbierto = true;
    while (loginAbierto) {

        let userInput = prompt("\tLOGIN:\n" + "\nUSER:");

        let posicionUser = dataBaseUsuarios.findIndex(user => user.user === userInput);

        if (posicionUser === -1) {

            posicionUser = dataBaseAdmins.findIndex(user => user.user === userInput);

            if (posicionUser === -1) {

                alert("Incorrect user or does not exist");
            }
            else {

                let passwordInput = parseInt(prompt("\t" + dataBaseAdmins[posicionUser].fullName + "\n" + "PASSWORD:"));
                if (dataBaseAdmins[posicionUser].password === passwordInput) {

                    loginAbierto = false;
                    alert("You have entered correctly");
                    return dataBaseAdmins[posicionUser];
                }
                else {

                    alert("Incorrect password entered");
                }
            }
        }
        else {

            let passwordInput = parseInt(prompt("\t" + dataBaseUsuarios[posicionUser].fullName + "\n" + "PASSWORD:"));

            if (dataBaseUsuarios[posicionUser].password === passwordInput) {

                loginAbierto = false;
                alert("You have entered correctly");
                return dataBaseUsuarios[posicionUser];
            }
            else {

                alert("Incorrect password entered");
            }
        }
    }
}

