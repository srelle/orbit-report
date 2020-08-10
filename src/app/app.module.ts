import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { ScaleMeDirective } from './scale-me.directive';
import { DirectivesDirective } from './directives.directive';
import { SatelliteDirective } from './satellite.directive';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    ScaleMeDirective,
    DirectivesDirective,
    SatelliteDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
