import { Component, OnInit, ViewChild } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userProfile: any;
  darkMode: boolean = false;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private oauthService: OAuthService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.spotify.com/v1/me').subscribe(profile => {
      this.userProfile = profile;
    });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
