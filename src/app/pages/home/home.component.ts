import { AfterViewInit, Component, Input, OnInit, TemplateRef } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  imports: [MatIconModule],
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
  customerReviews = [
    {
      reviewerName: 'DSDGrammy',
      reviewHeader: 'EXCELLENT!!!',
      stars: 5,
      reviewDetail:
        "I turned to CardioVisual to research Atrial Fibrillation because my husband experienced this during a medical procedure. I had no idea what it actually was. I was very impressed with the explanation and videos of the heart that CV offered. They were clear, precise, and easy to understand. I was then able to explain to my family what was going on. I have never had a strong understanding of medical terms and issues, so it has been somewhat frightening for me. With CardioVisual, I can read their info on any topic I need to research. I feel like having CardioVisual is like having a 'doctor in the house' to help me understand what my family member is going through and how I can help them. Every doctor should tell their patients about CV. Knowledge at your fingertips reduces fear of the unknown. Thank you, CardioVisual!!!",
    },
    {
      reviewerName: 'Kip&LaFawnduh',
      reviewHeader: 'Must-have!',
      stars: 5,
      reviewDetail:
        'The CardioVisual App has been an excellent resource for both myself and my patients. As a new nurse, I used the app to understand the conditions my patients had. I loved how the material was presented in the videos, and it truly made a difference! Now that I have been a nurse for several years, I am able to share the app with my patients to explain the procedures they are going for and to help them understand the condition they have been diagnosed with. Helping patients understand their conditions is essential to maintaining their health, and this app has made a HUGE impact on my patients!',
    },
    {
      reviewerName: 'Jyoti Mistry',
      reviewHeader: 'One Stop answers for all cardio information and questions',
      stars: 5,
      reviewDetail:
        'One stop place to know all about cardiac health, informative treatments, and everything one needs to know about various cardiac problems. Excellent app that can be a life-saving app with all the information provided. Highly recommend for everyone to have, get familiar with, and share with all their friends and family.',
    },
    {
      reviewerName: 'Randaddy1',
      reviewHeader: '5 stars!!!',
      stars: 5,
      reviewDetail:
        'I give this app 5/5 stars and here is why. Not only is there current content about many different heart conditions, the company continues to update the app and content. I have noticed many new developments to better interact with the users within the app. I have confidence this app will continue to expand and play an important role in the education I need to focus on my cardiovascular health.',
    },
    {
      reviewerName: 'LRUI26',
      reviewHeader: 'Great clinical tool and resource!',
      stars: 5,
      reviewDetail:
        'I really enjoy this app. I am a visual learner and the videos give me a better understanding of the disease processes with straightforward videos. It has several different health topics and covers treatments for each.',
    },
  ];
  statsData = [
    {
      value: '100K+',
      label: 'Clinicians',
      description: 'Globally',
    },
    {
      value: '1M+',
      label: 'Users',
      description: 'Globally',
    },
    {
      value: '100+',
      label: 'Countries',
      description: 'Where Used',
    },
    {
      value: '500+',
      label: 'Curated Videos in',
      description: 'English and Spanish',
    },
    {
      value: '700K+',
      label: 'Social Media',
      description: 'Followers',
    },
  ];
  newsData = [
    {
      imageSrc: '../../../assets/images/12 1.png',
      alt: 'Healthcare',
      title: 'Successful Heart and Kidney Treatment by Dr. Michael Gibson',
      description:
        'Dr. Michael Gibson, Senior Consultant Cardiology, Adult at cardioVisual provided by medical visual, exemplifies this through his treatment of Mr. Jack Paul.',
      category: 'Cardiac Sciences',
    },
    {
      imageSrc: '../../../assets/images/12 1.png',
      alt: 'Healthcare',
      title: 'Successful Heart and Kidney Treatment by Dr. Michael Gibson',
      description:
        'Dr. Michael Gibson, Senior Consultant Cardiology, Adult at cardioVisual provided by medical visual, exemplifies this through his treatment of Mr. Jack Paul.',
      category: 'Cardiac Sciences',
    },
    {
      imageSrc: '../../../assets/images/12 1.png',
      alt: 'Healthcare',
      title: 'Successful Heart and Kidney Treatment by Dr. Michael Gibson',
      description:
        'Dr. Michael Gibson, Senior Consultant Cardiology, Adult at cardioVisual provided by medical visual, exemplifies this through his treatment of Mr. Jack Paul.',
      category: 'Cardiac Sciences',
    },
    {
      imageSrc: '../../../assets/images/12 1.png',
      alt: 'Healthcare',
      title: 'Successful Heart and Kidney Treatment by Dr. Michael Gibson',
      description:
        'Dr. Michael Gibson, Senior Consultant Cardiology, Adult at cardioVisual provided by medical visual, exemplifies this through his treatment of Mr. Jack Paul.',
      category: 'Cardiac Sciences',
    },
    {
      imageSrc: '../../../assets/images/12 1.png',
      alt: 'Healthcare',
      title: 'Successful Heart and Kidney Treatment by Dr. Michael Gibson',
      description:
        'Dr. Michael Gibson, Senior Consultant Cardiology, Adult at cardioVisual provided by medical visual, exemplifies this through his treatment of Mr. Jack Paul.',
      category: 'Cardiac Sciences',
    },
  ];
  digitalSolutionsData = [
    {
      imageSrc: '../../../assets/images/digital-solutions/Custom-Website.png',
      alt: 'Custom Website',
      title1: 'For clinics &',
      title2: 'provider systems',
      subtitle: 'Custom Website',
      // description: 'For clinics & provider systems',
    },
    {
      imageSrc: '../../../assets/images/digital-solutions/CV-App.png',
      alt: 'Mobile App',
      title1: 'For on-the-go',
      title2: 'clinicians',
      subtitle: 'Mobile App',
      // description: 'For on-the-go clinicians',
    },
    {
      imageSrc: '../../../assets/images/digital-solutions/Social-Media-Phone.png',
      alt: 'Social Media',
      title1: 'For everyday',
      title2: 'learning',
      subtitle: 'Social Media',
      // description: 'For everyday learning',
    },
  ];
  youtubVideoContent: any = null;
  selectedReview: any = null;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.getYoutubVideo();
  }

  ngAfterViewInit(): void {
    new Swiper('.collaborator-swiper', this.swiperOptions);
    new Swiper('.expert-swiper', this.expertSwiperOptions);
    new Swiper('.users-partners-swiper', this.swiperOptions);
    new Swiper('.healthcare-swiper', this.healthcareSwiperOptions);
  }

  getYoutubVideo() {
    const API_URL =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCP8WJQvmL-PIsyhFnM3a3Yg&order=date&maxResults=1&type=video&key=AIzaSyD9iFRwDw9RNa1woFPhyUznsDRZdWZPQFU';
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        this.youtubVideoContent = data.items[0];
      });
  }

  showIcon(index: number, rating: number) {
    if (rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  openDialog(openReview: TemplateRef<any>, review: any): void {
    this.selectedReview = review;
    this.dialog.open(openReview);
  }

  closeDialog(): void {
    this.dialog.closeAll();
    this.selectedReview = null;
  }
}
