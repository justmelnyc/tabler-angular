import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule, SharedModule } from '@tabler/angular-core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterLinksComponent } from './ui/components/footer-links/footer-links.component'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent, FooterLinksComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
