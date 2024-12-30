import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  swiperOptions: SwiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 50,
        slidesPerGroup: 5,
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
  expertSwiperOptions: SwiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 40,
        slidesPerGroup: 5,
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
  healthcareSwiperOptions: SwiperOptions = {
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
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 16,
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
    { name: 'FDA', image: '../../../assets/images/trusted-partner/Abbott.svg' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/Abiomed.jpeg' },
    { name: 'Medtronic', image: '../../../assets/images/trusted-partner/Alivecor.jpg' },
    { name: 'NIH', image: '../../../assets/images/trusted-partner/AllianceforAgingResearch.jpg' },
    { name: 'CDC', image: '../../../assets/images/trusted-partner/AstraZeneca.jpg' },
    { name: 'FDA', image: '../../../assets/images/trusted-partner/Bard.svg' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/BioSig.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/BostonScientific.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/CDC.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/CookMedical.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/Edwards.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/Endologix.webp' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/FDA.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/Gore.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/Itamar.jpg' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/Medtronic.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/NationalHeartLungandBloodInstitute.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/NationalInstitutesofHealth.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/OspreyMedical.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/PhilipsHealthcare.webp' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/ShockwaveMedical.webp' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/Spectranetics.jpg' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/StJudeMedical.png' },
    { name: 'Philips', image: '../../../assets/images/trusted-partner/ZOLL.png' },
  ];
  experts = [
    {
      image: '../../../assets/images/expert-photos/MichaelGibson.png',
      name: 'Michael Gibson, MD',
      description: 'Harvard Medical School',
    },
    {
      image: '../../../assets/images/expert-photos/ThomasBlevins.png',
      name: 'Thomas Blevins, MD',
      description: 'Founder, Texas Diabetes and Endocrinology',
    },
    {
      image: '../../../assets/images/expert-photos/AndreaNatale.png',
      name: 'Andrea Natale, MD',
      description: 'Texas Cardiac Arrhythmia Institute',
    },
    {
      image: '../../../assets/images/expert-photos/PaulTucker.png',
      name: 'Paul A. Tucker, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/AseemDesai.png',
      name: 'Aseem Desai, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/CraigWalker.png',
      name: 'Craig Walker, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/GuruKowlgi.png',
      name: 'Guru Kowlgi, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/JayMathews2.png',
      name: 'Jay Mathews, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/JohnAllison.png',
      name: 'John Allison, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/MichelleRouthenstein.png',
      name: 'Michelle Routhenstein, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/RALPHDeFronzo.png',
      name: 'RALPHDe Fronzo, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/RobertChilton.png',
      name: 'Robert Chilton, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/RoderickTung.png',
      name: 'Roderick Tung, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/RodneyHorton.png',
      name: 'Rodney Horton, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/SamSears.png',
      name: 'Sam Sears, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/SushPrusty.png',
      name: 'Sush Prusty, MD',
      description: "St. David's South Austin Medical Center",
    },
    {
      image: '../../../assets/images/expert-photos/WendyTzou.png',
      name: 'Wendy Tzou, MD',
      description: "St. David's South Austin Medical Center",
    },
  ];
  logos = [
    { src: '../../../assets/images/keys-partner/Ascension.png', alt: 'HMS Logo' },
    { src: '../../../assets/images/keys-partner/ConnectWell.png', alt: 'White Logo' },
    {
      src: '../../../assets/images/keys-partner/KansasCityHeartRhythmInstitute.png',
      alt: "St. David's Medical Center",
    },
    { src: '../../../assets/images/keys-partner/MountSinaiHospital.png', alt: 'SM Web Logo' },
    { src: '../../../assets/images/keys-partner/Outgrow.png', alt: 'HMS Logo' },
    { src: '../../../assets/images/keys-partner/StanfordHealthCare.png', alt: 'White Logo' },
    { src: '../../../assets/images/keys-partner/StDavid_sMedicaCenter.png', alt: "St. David's Medical Center" },
    { src: '../../../assets/images/keys-partner/TCA.png', alt: 'SM Web Logo' },
    { src: '../../../assets/images/keys-partner/TexasDiabetesEndocrinology.jpg', alt: 'SM Web Logo' },
    { src: '../../../assets/images/keys-partner/TexasHeartVascular.jpg', alt: 'SM Web Logo' },
    { src: '../../../assets/images/keys-partner/VirginiaCardiovascularSpecialties.png', alt: 'SM Web Logo' },
  ];

  ngOnInit() {}
  ngAfterViewInit(): void {
    new Swiper('.collaborator-swiper', this.swiperOptions);
    new Swiper('.expert-swiper', this.expertSwiperOptions);
    new Swiper('.users-partners-swiper', this.swiperOptions);
    new Swiper('.healthcare-swiper', this.healthcareSwiperOptions);
  }
}
