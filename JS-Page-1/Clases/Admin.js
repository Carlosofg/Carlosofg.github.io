import { Usuario } from './Usuario.js';
import { dataBaseUsuarios } from '../BaseDeDatos/DB Usuarios.js';

export class Admin extends Usuario {

    rol = "Admin";

    constructor(name, lastName, age, email, user, password,ID) {
        super(name, lastName, age, email, user, password,ID)
    }

    editUser() {

        let input = prompt("\tENTER ID USER:\n");
        let inputID;
        if (input === "") {

            return alert("You can't leave the empty space");
        }

        else if (input === null) {

            return alert("You have cancelled the operation!");
        }
        else {

            inputID = parseInt(input);
        
            let indice = dataBaseUsuarios.findIndex(user => user.ID === inputID);

            if (indice === -1) {

                return alert("ERROR: User not found");
            }
            else {

                if (confirm(dataBaseUsuarios[indice].myInfo() + "\n" + "\tDo you want to edit it?")){

                    let newName = prompt(
                        "\tCHANGE NAME\n" +
                        "\nName: " + dataBaseUsuarios[indice].name +
                        "\nEnter the new name:"
                    );

                    let newLastName = prompt(
                        "\tCHANGE LASTNAME\n" +
                        "\nLast name: " + dataBaseUsuarios[indice].lastName +
                        "\nEnter the new last name:"
                    );

                    let newAge = prompt(
                        "\tCHANGE AGE\n" +
                        "\nAge: " + dataBaseUsuarios[indice].age +
                        "\nEnter the new age:"
                    );

                    let newEmail = prompt(
                        "\tCHANGE EMAIL\n" +
                        "\nEmail: " + dataBaseUsuarios[indice].email +
                        "\nEnter the new email:"
                    );

                    let newUser = prompt(
                        "\tCHANGE USERNAME\n" +
                        "\nUsername: " + dataBaseUsuarios[indice].user +
                        "\nEnter the new username:"
                    );

                    let newPassword = prompt(
                        "\tCHANGE PASSWORD\n" +
                        "\nPassword: " + dataBaseUsuarios[indice]._password +
                        "\nEnter the new password:"
                    );

                    let newBalance = prompt(
                        "\tCHANGE BALANCE\n" +
                        "\nBalance: " + dataBaseUsuarios[indice].balance +
                        "\nEnter the new balance:"
                    );

                    let newU = new Usuario(newName, newLastName, parseInt(newAge),newEmail, newUser, newPassword, inputID);
                    dataBaseUsuarios[indice] = newU;
                    return alert("\tMODIFIED USER\n" + newU.myInfo());
                }
            }
        } 
    }
    addUser() {

        let newName = prompt("\tNAME:\n");
        if (newName === null) return alert("You have cancelled the operation");
        if (newName === "") return alert("You can't leave the empty space");

        let newLastName = prompt("\tLAST NAME:\n");
        if (newLastName === null) return alert("You have cancelled the operation");
        if (newLastName === "") return alert("You can't leave the empty space");

        let ageInput = prompt("\tAGE:\n");
        if (ageInput === null) return alert("You have cancelled the operation");
        if (ageInput === "") return alert("You can't leave the empty space");

        let newAge = parseInt(ageInput);
        if (isNaN(newAge)) return alert("Age must be a number");

        let newEmail = prompt("\tEMAIL:\n");
        if (newEmail === null) return alert("You have cancelled the operation");
        if (newEmail === "") return alert("You can't leave the empty space");

        let newUser = prompt("\tUSERNAME:\n");
        if (newUser === null) return alert("You have cancelled the operation");
        if (newUser === "") return alert("You can't leave the empty space");

        let newPassword = prompt("\tPASSWORD:\n");
        if (newPassword === null) return alert("You have cancelled the operation");
        if (newPassword === "") return alert("You can't leave the empty space");

        let idInput = prompt("\tID:\n");
        if (idInput === null) return alert("You have cancelled the operation");
        if (idInput === "") return alert("You can't leave the empty space");

        let newID = parseInt(idInput);
        if (isNaN(newID)) return alert("ID must be a number");

        // CHECK 
        if (dataBaseUsuarios.findIndex(user => user.ID === newID) !== -1) {
            return alert("ID not available");
        }

        let newUserFinally = new Usuario(
            newName,
            newLastName,
            newAge,
            newEmail,
            newUser,
            newPassword,
            newID
        );

        dataBaseUsuarios.push(newUserFinally);
        return alert("User added successfully");
    }
    removeUser() {

        let idRemoveSTR = prompt("\tEnter the ID of the user to delete\n");

        if (idRemoveSTR === null) return alert("You have cancelled the operation");
        else if (idRemoveSTR === "") return alert("You can't leave the empty space");

        else {

            let idRemove = parseInt(idRemoveSTR);

            let indice = dataBaseUsuarios.findIndex(user => user.ID === idRemove);

            if (indice === -1) {

                return alert("ERROR: User not found");
            }
            else {

                dataBaseUsuarios.splice(indice,1);
                return alert("User successfully deleted");
            }
        }
    }
    viewStats() {

        let ID = prompt("Enter the ID");

        if (ID === "") {

            return alert("You can't leave the empty space")
        }
        else if (ID === null) {

            return alert("You have cancelled the operation");
        }
        else if (isNaN(ID)) {

            return alert("You can only enter numbers");
        }

        ID = parseInt(ID);

        let indice = dataBaseUsuarios.findIndex(user => user.ID === ID);

        if (indice === -1) {

            return alert("ERROR: User not found");
        }
        else {

            return alert("\tSTATS:\n" + dataBaseUsuarios[indice].myInfo());
        }
    }
}
