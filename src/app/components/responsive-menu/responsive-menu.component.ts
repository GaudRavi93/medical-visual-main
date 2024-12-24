import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
// import { CommonService } from '../../components/Services/common.service';
import { Router, RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
// import { apiUrl } from '../../routes';
// import { BaseService } from '../../components/Services/base.service';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-responsive-menu',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule],
  templateUrl: './responsive-menu.component.html',
  styleUrl: './responsive-menu.component.scss',
})
export class ResponsiveMenuComponent implements OnInit {
  panelOpenState = false;
  domainData: any = [];
  // roleId: number = null;
  constructor(
    public dialog: MatDialog,
    // public _commonService: CommonService,
    public router: Router,
    // private _baseService: BaseService,
    public cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}
  ngOnInit(): void {
    // // this.getDomainData();
    // if (isPlatformBrowser(this.platformId)) {
    //       if (this.cookieService.get('userCred').length > 0) {
    //         this.roleId = JSON.parse(this.cookieService.get('userCred'))?.[
    //           'user_role_id'
    //         ];
    //       }
    //     }
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  logout() {
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/', { replaceUrl: true }).then(() => window.location.reload());
  }

  routerChange(router: string) {
    this.dialog.closeAll();
    this.router.navigateByUrl(router);
  }

  browserVideo(language: string) {
    this.dialog.closeAll();
    this.router.navigate(['/videos'], {
      queryParams: { language: language },
      replaceUrl: true,
    });
  }

  // getDomainData() {
  //   this._baseService.getRecords(apiUrl.getDomainData).then((res) => {
  //     if (res.success) {
  //       this.domainData = res?.data;
  //       console.log('this.domainData: ', this.domainData);
  //     }
  //   });
  // }

  // async downloadQRsheet() {
  //   var pdfFile;
  //   if (this.domainData[0]?.name == 'heart.medicalvisual.com') {
  //     pdfFile = 'https://cmsapi.disolutions.net/media/heart.medicalvisual.pdf';
  //   } else if (this.domainData[0]?.name == 'diabetes.medicalvisual.com') {
  //     pdfFile =
  //       'https://cmsapi.disolutions.net/media/diabities.medicalvisual.pdf';
  //   } else if (this.domainData[0]?.name == 'bid.medicalvisual.com') {
  //     pdfFile = 'https://cmsapi.disolutions.net/media/bid.medicalvisual.pdf';
  //   } else {
  //     pdfFile =
  //       'https://cmsapi.disolutions.net/media/demonew.medicalvisual.pdf';
  //   }
  //   window.location.replace(pdfFile);
  // }
}
