import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { CmComponent } from './cm/cm.component';
import { PmComponent } from './pm/pm.component';
import { ExecuteComponent } from './execute/execute.component';
import { StatusInstallationComponent } from './status-installation/status-installation.component';
import { QueriesComponent } from './queries/queries.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,   // <-- Make sure FooterComponent is declared here
    ProductServiceComponent,
    CmComponent,
    PmComponent,
    ExecuteComponent,
    StatusInstallationComponent,
    QueriesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
