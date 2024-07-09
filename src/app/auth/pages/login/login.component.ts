import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: '<button mat-raised-button (click)="login()">Login with Spotify</button>'
})
export class LoginComponent {
  clientId = '81c66323b65443559060f6de2044101d'; // Tu client ID de Spotify
  redirectUri = 'http://localhost:4200/callback';

  login() {
    const scopes = 'user-read-private user-read-email user-library-read playlist-read-private';
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(scopes)}`;
  }
}
