import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1IiwibmJmIjoxNjUzNTcyNzE4LCJleHAiOjE2NTM1NzM2MTgsImlhdCI6MTY1MzU3MjcxOH0.edya9xjq1RaGhvceK8-ggbMvcPE3f5H1th-21C4xQ1o'

    req = req.clone({
      setHeaders: { Authorization: `Bearer ${jwt}`}
    })

    console.log(req);

    return next.handle(req);
  }
}
