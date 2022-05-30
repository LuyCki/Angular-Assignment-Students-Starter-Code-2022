import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AdminLoadGuard implements CanLoad {
  constructor(private readonly router: Router) {}

  canLoad() {
    const isAdmin = false;

    if (isAdmin) return true;

    this.router.navigate(['/products']);
    return false;
  }
}
