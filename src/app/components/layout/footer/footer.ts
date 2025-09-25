import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  socialLinks = [
    {
      customIcon: 'linkedin',
      url: 'https://www.linkedin.com/company/whileinsofia/',
    },
    {
      customIcon: 'x',
      url: 'https://www.x.com/whileinsofia/',
    },
    {
      customIcon: 'youtube',
      url: 'https://www.youtube.com/@WhileInSofia',
    },
    {
      customIcon: 'instagram',
      url: 'https://www.instagram.com/whileinsofia/',
    },
    {
      customIcon: 'facebook',
      url: 'https://www.facebook.com/whileinsofia/',
    },
    {
      customIcon: 'tiktok',
      url: 'https://www.tiktok.com/@whileinsofia',
    },
    {
      customIcon: 'whatsapp',
      url: 'https://wa.me/359897907555',
    },
    {
      icon: 'mail',
      url: 'mailto:contact@whileinsofia.com',
    },
  ];
  readonly currentYear = new Date().getFullYear();
}
