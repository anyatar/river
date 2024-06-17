import { Component,OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { IUser } from '../interfaces/user';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: IUser[] = []; // Define the user array

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data:any) => {
      console.log(data)
      this.users = data;
    });
  }
}
