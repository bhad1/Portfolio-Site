import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AboutJumbotronComponent } from './about/about-jumbotron/about-jumbotron.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutInfoComponent } from './about/about-info/about-info.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListingComponent } from './portfolio/projects/product-listing/product-listing.component';
import { AngularCarouselComponent } from './portfolio/projects/angular-carousel/angular-carousel.component';
import { ProductListingDescriptionComponent } from './portfolio/project-descriptions/product-listing-description/product-listing-description.component';
import { AngularCarouselDescriptionComponent } from './portfolio/project-descriptions/angular-carousel-description/angular-carousel-description.component';
import { AlbumModuleComponent } from './portfolio/projects/album-module/album-module.component';
import { AlbumModuleDescriptionComponent } from './portfolio/project-descriptions/album-module-description/album-module-description.component';

const appRoutes: Routes = [

  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    AboutJumbotronComponent,
    AboutComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    ContactMeComponent,
    AboutInfoComponent,
    FooterComponent,
    ProductListingComponent,
    ProductListingComponent,
    AngularCarouselComponent,
    ProductListingDescriptionComponent,
    AngularCarouselDescriptionComponent,
    AlbumModuleComponent,
    AlbumModuleDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
