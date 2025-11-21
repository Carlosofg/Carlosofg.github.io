import { Usuario } from './Usuario.js';

export class Admin extends Usuario {

    rol = "Admin";

    constructor(name, lastName, age, email, user, password,ID) {
        super(name, lastName, age, email, user, password,ID)
    }

}