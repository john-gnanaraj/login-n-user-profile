import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './app.routing';
import { NgxPermissionsModule } from 'ngx-permissions';

import { AppComponent } from './app.component';
import { UserAccessModule } from './user-access/user-access.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { UserProfileModule } from './user-profile/user-profile.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './user-access/login/login.component';

import { LoginGuard } from './services/login.guard';
import { PagenotfoundComponent } from './page404/pagenotfound/pagenotfound.component';
import { AlertComponent } from './alert/alert/alert.component';
import { AlertService } from './services/alert.service';
import { UserProfileService } from './services/user-profile.service';



@NgModule({
  declarations: [
    AppComponent,LoginComponent, PagenotfoundComponent, AlertComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UserAccessModule,
    UserProfileModule,
    FormsModule,
    HttpClientModule,
    routing,
    // Specify your library as an import
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoginGuard,
    AlertService,
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
