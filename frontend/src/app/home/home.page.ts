import { Component } from '@angular/core';
import { Router } from '@angular/router';

import Echo from 'laravel-echo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nickname = '';

  constructor(private router: Router) { }

  joinChat() {
    this.router.navigate(['chat-room', this.nickname]);
  }

  // constructor() {
  //   this.initEcho();
  // }

  // initEcho() {

  //   const echo = new Echo({
  //     broadcaster: 'pusher',
  //     key: 'local',
  //     wsHost: 'localhost',
  //     wsPort: 6001,
  //     // cluster: 'eu',
  //     forceTLS: false,
  //     disableStats: true
  //   });

  //   const channel = echo.channel('channel');
  //   channel.listen('NewMessage', (data) => {
  //     console.log("algo llegó")
  //     console.log(JSON.stringify(data));
  //   });
  // }

}