import {Component, Input} from "@angular/core";
import {User} from "../model/User";
/**
 * Created by nicasandra on 12/16/2016.
 */

@Component({
    selector: 'app-users',
    templateUrl: 'app/users/users.component.html'
})

export class UsersComponent {
    user: User = new User(null, null, null, null, null, null, null);
    users: Array<User> = [
        new User(1, 'nickasandra', 'Nick', 'Casandra', '123456', '0732401175', new Date),
        new User(2, 'ovgeorgescu', 'Ovidiu', 'Georgescu', '123456', '0732401175', new Date),
    ];

    delete(i) {
        this.users.splice(i, 1);
    }


    addUser() {
        this.users.push(new User(null, this.user.username, this.user.firstname, this.user.lastname, null, null, null));
    }


}
