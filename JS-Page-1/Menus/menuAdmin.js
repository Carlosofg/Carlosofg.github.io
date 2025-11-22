export function menuAdmin(userLog) {

    let openMenu = true;

    while (openMenu) {

        let opcion = parseInt(prompt("\t" + userLog.fullName + "\n" + "\tMENU\n" + "Enter option\n" + "1.Edit user\n" + "2.Add user\n" + "3.Remove user\n" + "4.View stats user\n" + "0.EXIT"));

        switch (opcion) {

            case 1:

                userLog.editUser();
                break;
            
            case 2:

                userLog.addUser();
                break;

            case 3:

                userLog.removeUser();
                break;

            case 4:

                userLog.viewStats();
                break;
        }
    }
}