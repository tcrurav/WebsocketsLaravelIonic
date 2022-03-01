import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Echo from 'laravel-echo';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {

  messages = [];
  nickname = '';
  message = '';

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nickname = params['nickname'];

      this.doConnection();
    });
  }

  doConnection() {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: 'local',
      wsHost: 'localhost',
      wsPort: 6001,
      // cluster: 'eu',
      forceTLS: false,
      disableStats: true
    });

    const channel = echo.channel('channel');
    channel.listen('NewMessage', (data) => {
      console.log("algo llegó")
      console.log(JSON.stringify(data));
      this.messages.push(data);
    });
  }

  // ionViewWillLeave() {
  //   this.socket.disconnect();
  // }

  sendMessage(){
    this.api.sendBroadcast({ from: this.nickname, text: this.message}).subscribe(() => {
      this.message = '';
      console.log("message sent");
    });
    
  }

}
