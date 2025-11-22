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

    viewBalance() {

        return alert("\nBALANCE\n" + "Your balance is: $" + this.balance );
    }

    WithdrawMoney() {

        let input = prompt("\tWITHDRAW\n" + "\nEnter the amount of money to withdraw:");
        let amount = parseInt(input);

        if (input === "") {

            return alert("Yo cant do this");
        }
        
        if (input === null) {

            return alert("You have cancelled the operation!");
        }
        if (isNaN(amount)) {

            return alert("You can only enter numbers!")
        }
        if (amount <= 0 || amount > this.balance) {

            return alert("ERROR: Yo cant do this");
        }
        else {

            this.balance -= amount;
            alert("You have withdrawn: $" + amount);
            return this.viewBalance();
        }
    }

    depositMoney() {

        let input = prompt("\tDEPOSIT\n" + "\nEnter the amount to deposit:")
        let amount = parseInt(input);

        if(input === "") {

            return alert("You can't leave the empty space");
        }
        
        if (input === null) {

            return alert("You have cancelled the operation!");
        }
        if (isNaN(amount)) {

            return alert("You can only enter numbers!");
        }
        if (amount <= 0) {

            return alert("You cant do this");
        }
        else {

            this.balance += amount;
            alert("You have deposited $" + amount);
            return this.viewBalance();
        }
    }
}


