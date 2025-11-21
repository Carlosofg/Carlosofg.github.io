function viewBalance(userLog) {

    alert("\nBALANCE\n" + "Your balance is: $" + userLog.balance );
}

function WithdrawMoney(userLog) {

    let input = prompt("\tWITHDRAW\n" + "\nEnter the amount of money to withdraw:");
    let amount = parseInt(input);

    if (input === null) {

        return alert("You have cancelled the operation!");
    }
    if (isNaN(amount)) {

        return alert("You can only enter numbers!")
    }
    if (amount <= 0 || amount > userLog.balance) {

        return alert("ERROR: Yo cant do this");
    }
    else {

        userLog.balance -= amount;
        alert("You have withdrawn: $" + amount);
        return viewBalance(userLog);
    }
} 

function depositMoney(userLog) {

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

        userLog.balance += amount;
        alert("You have deposited $" + amount);
        return viewBalance(userLog);
    }




}


export { viewBalance, WithdrawMoney, depositMoney };