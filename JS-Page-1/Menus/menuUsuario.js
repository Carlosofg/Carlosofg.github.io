import { viewBalance, WithdrawMoney, depositMoney } from './FuncionesMenuUsuario/funcionesU.js';

export function menuUser(userLog) {

    let openMenu = true;

    while (openMenu) {

        let opcion = parseInt(prompt("\t" + userLog.fullName + "\n" + "\tMENU\n" + "\n1.View balance\n" + "2.Withdraw money\n" + "3.Deposit money\n"));

        switch (opcion) {

            case 1:

                viewBalance(userLog);
                break;

            case 2:

                WithdrawMoney(userLog);
                break;

            case 3:

                depositMoney(userLog);
                break;

            default:

                alert("Invalid option");
        }






    }






}