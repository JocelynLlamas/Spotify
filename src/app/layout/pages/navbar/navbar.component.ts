import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const accessToken = localStorage.getItem('spotify_access_token');
    console.log(accessToken)
    if (accessToken) {
      this.http.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).subscribe(profile => {
        console.log(profile);
        this.userProfile = profile;
      });
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
