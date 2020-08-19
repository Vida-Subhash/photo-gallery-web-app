import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// import { SpinereComponent } from './spinere/spinere.component';
import { CustomHttpInterceptor } from './http-interceptor';
import { SpinerComponent } from './spiner/spiner.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    SpinerComponent,
    AlbumComponent,
    PhotoComponent,
    // RouterModule,
    // routingComponents
    // SpinereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
