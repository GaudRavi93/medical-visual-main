import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformBrowser } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ResponsiveMenuComponent } from '../responsive-menu/responsive-menu.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule, MatButtonModule, MatInputModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  seachMenuOpen: boolean = false;
  searchText = '';
  constructor(
    public router: Router,
    public dialog: MatDialog,
    public cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}
  ngOnInit(): void {}
  browserVideo(language: string) {
    this.router.navigate(['/videos'], {
      queryParams: { language: language },
      replaceUrl: true,
    });
  }

  onEnter() {
    if (this.searchText != '') {
      this.router.navigate(['/search'], {
        queryParams: { key: this.searchText },
      });
    }
    // Add your logic here
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      this.cookieService.deleteAll();
    }
    this.cookieService.delete('userCred');
    this.router.navigateByUrl('/', { replaceUrl: true }).then(() => window.location.reload());
  }

  openDialog() {
    this.dialog.open(ResponsiveMenuComponent, {
      height: '100vh',
      width: '100vw',
      panelClass: 'headerMenuResponsive',
    });
  }
}
