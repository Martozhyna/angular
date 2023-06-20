import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-datails',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-datails.component.css']
})
export class UserDetailsComponent {
  @Input()
  user:IUser

  userId: number


  getPost(): void {
    this.userId = this.user.id


  }
}
