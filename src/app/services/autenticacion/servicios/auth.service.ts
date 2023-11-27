import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  users:User[] = [
    {username:  'admin', password: 'admin'},
    {username:  'Joel', password: '1234'},
    {username:  'Alex', password: '5678'},
    {username:  'Yolanda', password: '9012'},
    {username:  'Josten', password: '3456'},
    {username:  'Darlyn', password: '7890'}
  ]

  autentico:boolean = false;

  // Método para verificar las credenciales del usuario
  authenticateUser(username?: string, password?: string): boolean {
    // Verificar si el usuario y contraseña coinciden con algún usuario almacenado
    const foundUser = this.users.find(user => user.username === username && user.password === password);
    this.autentico = !!foundUser;
    return !!foundUser; // Devuelve true si se encuentra el usuario, false si no se encuentra
  }

  isAuthenticated():boolean {
    return this.autentico;
  }

  
}
