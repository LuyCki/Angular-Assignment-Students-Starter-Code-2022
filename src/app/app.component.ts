import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpService } from './core/api/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly httpService: HttpService) {
    // Example forkjoin
    forkJoin([this.httpService.get('/products'), this.httpService.get('/user')])
      .subscribe(([products, user]) => {
        console.log(Date.now());

        console.log(products);
        console.log(user);
      })

    // this.httpService.get('/products').subscribe((products) => {
    //   console.log(Date.now(), products);
    // })

    // this.httpService.get('/user').subscribe((user) => {
    //   console.log(Date.now(), user);
    // })
  }
}
