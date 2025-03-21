import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseService } from '../../services/base.service';
import { apiUrl } from '../../routes';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private baseService: BaseService,
    private toastService: ToastService,
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', Validators.required],
      organization: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Email validation
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  sponsorsList = [
    { name: 'Abbott', image: '../../../../assets/images/trusted-partner/Abbott.svg' },
    { name: 'Medtronic', image: '../../../../assets/images/trusted-partner/Medtronic.png' },
    { name: 'ShockwaveMedical', image: '../../../../assets/images/trusted-partner/ShockwaveMedical.webp' },
  ];

  partnersList = [
    { image: '../../../../assets/images/keys-partner/BID.png', name: 'BID' },
    { image: '../../../../assets/images/keys-partner/StDavid_sMedicaCenter.png', name: "St. David's Medical Center" },
    { image: '../../../../assets/images/keys-partner/TCA.png', name: 'Texas Cardiac Arrhythmia' },
    {
      image: '../../../../assets/images/keys-partner/TexasDiabetesEndocrinology.jpg',
      name: 'TexasDiabetesEndocrinology',
    },
  ];

  onSubmit() {
    try {
      if (this.contactForm.valid) {
        this.baseService
          .postRecord(apiUrl.loginUser, { ...this.contactForm.value, toEmail: 'utsav.disolutions@gmail.com' })
          .then((res) => {
            console.log('res: ', res);
            if (res.success) {
              this.contactForm.reset();
              this.toastService.showSuccessToast(res.message)
            }
          });
      } else {
        this.toastService.showWarningToast('Form is invalid')
      }
    } catch (err:any) {
      this.toastService.showErrorToast(err.message)
    }
  }

  onGeneralInquires() {}
}
