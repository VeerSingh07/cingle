import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './layout/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { DesignComponent } from './pages/design/design.component';
import { routing } from './app.routes';
import { FixedTopComponent } from './components/fixed-top/fixed-top.component';
import { AboutComponent } from './components/about/about.component';
import { TitleHeadingComponent } from './components/title-heading/title-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactHeaderComponent,
    BannerComponent,
    HomeComponent,
    DesignComponent,
    FixedTopComponent,
    AboutComponent,
    TitleHeadingComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
