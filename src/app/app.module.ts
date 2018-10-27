import { CircleSvgService } from './shared/svg-components/circle/circle-svg.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { SvgComponentsModule } from './modules/svg-components/svg-components.module';
import { LeftComponent } from './shared/sidebar/left/left.component';
import { TopComponent } from './shared/sidebar/top/top.component';
import { PolylineSvgService } from './shared/svg-components/polyline/polyline-svg.service';
import { BaseSvgService } from './shared/svg-components/base-svg.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SvgComponentsModule,
    AngularFontAwesomeModule,
    ColorPickerModule
  ],
  providers: [
    BaseSvgService,
    PolylineSvgService,
    CircleSvgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
