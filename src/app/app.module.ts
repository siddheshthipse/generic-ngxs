import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//For NGXS
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CompanyComponent } from './company/company.component';
import { DesignutilityService } from './designutility.service';
import { environment } from 'src/environments/environment';
import { AppState } from 'src/app/states/app.state';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState],{ developmentMode: !environment.production }), NgxsLoggerPluginModule.forRoot(), NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
