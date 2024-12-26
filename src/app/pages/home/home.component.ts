import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  swiperOptions: SwiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  collaborators = [
    { name: 'FDA', image: '../../../assets/images/collaborator-fda.png' },
    { name: 'Philips', image: '../../../assets/images/collaborator-Philips.png' },
    { name: 'Medtronic', image: '../../../assets/images/collaborator-medtronic.png' },
    { name: 'NIH', image: '../../../assets/images/collaborator-NIH.png' },
    { name: 'CDC', image: '../../../assets/images/collaborator-cdc.png' },
    { name: 'FDA', image: '../../../assets/images/collaborator-fda.png' },
    { name: 'Philips', image: '../../../assets/images/collaborator-Philips.png' },
  ];
  experts = [
    {
      image: '../../../assets/images/MichaelGibson 1.png',
      name: 'Michael Gibson, MD',
      description: 'Harvard Medical School',
    },
    {
      image: '../../../assets/images/ThomasBlevins 1.png',
      name: 'Thomas Blevins, MD',
      description: 'Founder, Texas Diabetes and Endocrinology',
    },
    {
      image: '../../../assets/images/AndreaNatale3 1.png',
      name: 'Andrea Natale, MD',
      description: 'Texas Cardiac Arrhythmia Institute',
    },
    {
      image: '../../../assets/images/PaulTucker 1.png',
      name: 'Paul A. Tucker, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/MichaelGibson 1.png',
      name: 'Michael Gibson, MD',
      description: 'Harvard Medical School',
    },
    {
      image: '../../../assets/images/ThomasBlevins 1.png',
      name: 'Thomas Blevins, MD',
      description: 'Founder, Texas Diabetes and Endocrinology',
    },
  ];
  logos = [
    { src: '../../../assets/images/hms_logo_final_rgb_0 1.png', alt: 'HMS Logo' },
    { src: '../../../assets/images/whitelogo-350x150.png', alt: 'White Logo' },
    { src: '../../../assets/images/st-davids-medical-center.png', alt: "St. David's Medical Center" },
    { src: '../../../assets/images/SM_Web_vert_LG 1.png', alt: 'SM Web Logo' },
    { src: '../../../assets/images/hms_logo_final_rgb_0 1.png', alt: 'HMS Logo' },
    { src: '../../../assets/images/whitelogo-350x150.png', alt: 'White Logo' },
    { src: '../../../assets/images/st-davids-medical-center.png', alt: "St. David's Medical Center" },
    { src: '../../../assets/images/SM_Web_vert_LG 1.png', alt: 'SM Web Logo' },
  ];

  ngOnInit() {
    setTimeout(() => {
      new Swiper('.swiper', this.swiperOptions);
    }, 0); // Ensure Swiper initializes after DOM is ready
  }
}
