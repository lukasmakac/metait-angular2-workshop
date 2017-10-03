import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Error404Component } from './error/error404/error404.component';
import { SpeakerNamesPipe } from './session/speaker-names.pipe';
import { SessionDetailComponent } from './session/session-detail/session-detail.component';
import { SessionListComponent } from './session/session-list/session-list.component';
import { SessionDetailCardComponent } from './session/session-detail-card/session-detail-card.component';
import { AppRoutingModule } from './app-routing.module';
import { SessionDataService } from './session/session-data.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    SpeakerNamesPipe,
    SessionDetailComponent,
    SessionListComponent,
    SessionDetailCardComponent,
    SessionDetailComponent
  ],

  // TODO Přidejte modul pro reaktivní formuláře
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [SessionDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
