import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { HttpClient } from '@angular/common/http';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('While In Sofia');
  iconRegistry = inject(MatIconRegistry);
  sanitizer = inject(DomSanitizer);
  http = inject(HttpClient);

  constructor() {
    this.iconRegistry.addSvgIcon(
      'whileinsofia',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/whileinsofia.svg')
    );
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/linkedin.svg')
    );
    this.iconRegistry.addSvgIcon(
      'x',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/x.svg')
    );
    this.iconRegistry.addSvgIcon(
      'youtube',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/youtube.svg')
    );
    this.iconRegistry.addSvgIcon(
      'instagram',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/instagram.svg')
    );
    this.iconRegistry.addSvgIcon(
      'facebook',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/facebook.svg')
    );
    this.iconRegistry.addSvgIcon(
      'tiktok',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/tiktok.svg')
    );
    this.iconRegistry.addSvgIcon(
      'whatsapp',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/whatsapp.svg')
    );
    this.iconRegistry.addSvgIcon(
      'mail',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/mail.svg')
    );
  }
}
