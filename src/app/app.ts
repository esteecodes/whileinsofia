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
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('While In Sofia');
  iconRegistry = inject(MatIconRegistry);
  sanitizer = inject(DomSanitizer);
  http = inject(HttpClient);

  constructor() {
    // Register custom SVG icons
    this.iconRegistry.addSvgIcon(
      'whileinsofia',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/whileinsofia.svg')
    );
  }
}
