import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  playlists: any[] = [];
  accessToken: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        const params = new URLSearchParams(fragment);
        this.accessToken = params.get('access_token');

        if (this.accessToken) {
          localStorage.setItem('spotify_access_token', this.accessToken); // Guardar el token en localStorage
          this.http.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
              Authorization: `Bearer ${this.accessToken}`
            }
          }).subscribe((data: any) => {
            this.playlists = data.items;
          });
        } else {
          this.router.navigate(['/']);
        }
      }
    });
  }
}
