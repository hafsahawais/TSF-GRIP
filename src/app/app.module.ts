import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent, NewsletterDialog} from './components/app-root/app.component';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent, TestimonialDialog} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BannerComponent} from './components/banner/banner.component';
import {CountoModule} from "angular2-counto/index";
import {ProjectsComponent} from './pages/projects/projects.component';
import {SchoolDialog, SchoolsComponent} from './pages/schools/schools.component';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {GalleryModule} from '@ngx-gallery/core';
import {LIGHTBOX_CONFIG, LightboxModule} from '@ngx-gallery/lightbox';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {DonateComponent} from './pages/donate/donate.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from "ngx-spinner";
import {SafePipe} from './pipes/safe-pipe.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TestimonialDialog,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    BannerComponent,
    ProjectsComponent,
    SchoolsComponent,
    SchoolDialog,
    DonateComponent,
    NewsletterDialog,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CountoModule,
    SwiperModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    GalleryModule,
    LightboxModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
    // FlashMessagesModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    },
    {
       provide: MAT_DIALOG_DEFAULT_OPTIONS,
         useValue: {hasBackdrop: true}
    }
  ],
  exports: [
    MatDialogModule
  ],
  entryComponents: [
    SchoolDialog,
    TestimonialDialog,
    NewsletterDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
