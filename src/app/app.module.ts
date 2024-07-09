import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule, OAuthService, AuthConfig } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu'; 
import { LoginComponent } from './auth/pages/login/login.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { NavbarComponent } from './layout/pages/navbar/navbar.component';
import { SidenavComponent } from './layout/pages/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

const authConfig: AuthConfig = {
  issuer: 'https://accounts.spotify.com',
  redirectUri: window.location.origin + '/callback',
  clientId: '81c66323b65443559060f6de2044010d', // Tu client ID de Spotify
  responseType: 'token',
  scope: 'user-read-private user-read-email user-library-read playlist-read-private',
  showDebugInformation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatInputModule,
    MatMenuModule,  
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
