import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { CacheService } from './cache.service';
import { HttpCacheService } from './http-cache.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatToolbarModule,MatButtonModule,MatInputModule
  ],
  providers: [CacheService,{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpCacheService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
