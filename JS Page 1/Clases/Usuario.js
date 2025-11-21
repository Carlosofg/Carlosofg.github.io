export class Usuario {

    rol = "Usuario";

    constructor(name, lastName, age, email, user, password, ID) {

        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.user = user;
        this._password = password;
        this.ID = ID;
        this.balance = 1000;
    }
    get password () {

        return this._password; 
    }
    get fullName () {

        return `${this.name} ${this.lastName}`;
    }

    myInfo() {

        return `ACCOUNT ID: ${this.ID}
Name: ${this.name}
Last Name: ${this.lastName}
Age: ${this.age}
Email: ${this.email}`;
    }

}


