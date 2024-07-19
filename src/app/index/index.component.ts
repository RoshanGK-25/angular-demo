import { Component, Input } from '@angular/core';
import { User } from '../inerface/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  userData: User[] = [];
  @Input() updateUser: any = {};
  routeTitle: any;
  constructor(private user: UserService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getAllUsers()
    this.routeTitle = this.route.snapshot.routeConfig?.title
  }
  getAllUsers() {
    return this.user.getUsers().subscribe((res) => {
      // console.log(res);
      this.userData = res;
    })
  }
  deleteUser(userId: number) {
    // console.log(userId);
    return this.user.deleteUser(userId).subscribe((res) => {
      console.log(res);
      this.getAllUsers();
    })
  }
  editUser(userId: number, user: User) {
    return this.user.updateUser(userId, user).subscribe((res) => {
      this.updateUser = res;
      console.log(this.updateUser);
      // this.router.navigate([`edit/:${userId}`, user]);
    });
  }
}
