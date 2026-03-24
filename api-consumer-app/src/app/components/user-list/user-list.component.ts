import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = '';
    console.log('Iniciando carga de usuarios...');
    
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.log('Datos recibidos:', data);
        this.users = data;
        this.loading = false;
      },
      error: (error: string) => {
        console.error('Error completo:', error);
        this.error = error;
        this.loading = false;
      }
    });
  }

  reloadUsers(): void {
    this.loadUsers();
  }
}