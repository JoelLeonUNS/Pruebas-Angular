import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if (this.authService.isAuthenticated()) {
      return true; // Si el usuario está autenticado, permite el acceso a la ruta
    } else {
      // Si el usuario no está autenticado, redirige a la página de login
      return this.router.createUrlTree(['/login']); // Reemplaza '/login' con tu ruta de login
    }
  }
}