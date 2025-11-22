export function menuUser(userLog) {

    let openMenu = true;

    while (openMenu) {

        
        let opcion = parseInt(prompt("\t" + userLog.fullName + "\n" + "\tMENU\n" + "Enter option\n" + "\n1.View balance\n" + "2.Withdraw money\n" + "3.Deposit money\n" + "4.My account\n" + "0.EXIT"));
        switch (opcion) {

            case 1:

                userLog.viewBalance();
                break;

            case 2:

                userLog.WithdrawMoney();
                break;

            case 3:

                userLog.depositMoney();
                break;

            case 4:

                alert(userLog.myInfo());
                break;

            case 0:

                openMenu = false;
                alert("GOOD BYE" + userLog.fullName);
                break;

            default:

                alert("Invalid option");
                break;
        }
    }
}