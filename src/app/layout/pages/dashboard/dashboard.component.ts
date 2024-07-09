import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  playlists: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.spotify.com/v1/me/playlists').subscribe((data: any) => {
      this.playlists = data.items;
    });
  }
}
