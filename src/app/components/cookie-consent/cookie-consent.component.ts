import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
  standalone: true,
})
export class CookieConsentComponent implements OnInit {
  showBanner = false;

  constructor() {}

  ngOnInit() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      this.showBanner = true;
    }
  }

  acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    this.showBanner = false;
  }

  declineCookies() {
    localStorage.setItem('cookieConsent', 'false');
    this.showBanner = false;
  }
}
