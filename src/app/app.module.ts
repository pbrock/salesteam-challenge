import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadersComponent } from './leaders/leaders.component';
import { FeedComponent } from './feed/feed.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadersComponent,
    FeedComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
