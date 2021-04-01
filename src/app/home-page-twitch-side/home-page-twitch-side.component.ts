import { Component, OnInit } from '@angular/core';

declare const Twitch: any;
@Component({
  selector: 'app-home-page-twitch-side',
  templateUrl: './home-page-twitch-side.component.html',
  styleUrls: ['./home-page-twitch-side.component.scss']
})
export class HomePageTwitchSideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      var options = {
          width: "100%",
          height: "420px",
          channel: "skrt_rl"          
        };
        var player = new Twitch.Player("twitch-across", options);
        player.setVolume(0.5);
  }

}
