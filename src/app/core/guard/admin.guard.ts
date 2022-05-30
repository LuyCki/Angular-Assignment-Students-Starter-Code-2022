import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {

  constructor(private readonly router: Router) {}

  canActivate() {
    const isAdmin = false;

    if (isAdmin) return true;

    this.router.navigate(['/products']);
    return false;
  }
}
