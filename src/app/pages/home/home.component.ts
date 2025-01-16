import { AfterViewInit, Component, Input, OnInit, TemplateRef } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [MatIconModule, CommonModule],
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
    { name: 'Abbott', image: '../../../assets/images/trusted-partner/Abbott.svg' },
    { name: 'Abiomed', image: '../../../assets/images/trusted-partner/Abiomed.jpeg' },
    { name: 'Alivecor', image: '../../../assets/images/trusted-partner/Alivecor.jpg' },
    { name: 'AllianceforAgingResearch', image: '../../../assets/images/trusted-partner/AllianceforAgingResearch.jpg' },
    { name: 'AstraZeneca', image: '../../../assets/images/trusted-partner/AstraZeneca.jpg' },
    { name: 'Bard', image: '../../../assets/images/trusted-partner/Bard.svg' },
    { name: 'BioSig', image: '../../../assets/images/trusted-partner/BioSig.png' },
    { name: 'BostonScientific', image: '../../../assets/images/trusted-partner/BostonScientific.png' },
    { name: 'CDC', image: '../../../assets/images/trusted-partner/CDC.png' },
    { name: 'CookMedical', image: '../../../assets/images/trusted-partner/CookMedical.png' },
    { name: 'Edwards', image: '../../../assets/images/trusted-partner/Edwards.png' },
    { name: 'Endologix', image: '../../../assets/images/trusted-partner/Endologix.webp' },
    { name: 'FDA', image: '../../../assets/images/trusted-partner/FDA.png' },
    { name: 'Gore', image: '../../../assets/images/trusted-partner/Gore.png' },
    { name: 'Itamar', image: '../../../assets/images/trusted-partner/Itamar.jpg' },
    { name: 'Medtronic', image: '../../../assets/images/trusted-partner/Medtronic.png' },
    {
      name: 'NationalHeartLungandBloodInstitute',
      image: '../../../assets/images/trusted-partner/NationalHeartLungandBloodInstitute.png',
    },
    {
      name: 'NationalInstitutesofHealth',
      image: '../../../assets/images/trusted-partner/NationalInstitutesofHealth.png',
    },
    { name: 'OspreyMedical', image: '../../../assets/images/trusted-partner/OspreyMedical.png' },
    { name: 'PhilipsHealthcare', image: '../../../assets/images/trusted-partner/PhilipsHealthcare.webp' },
    { name: 'ShockwaveMedical', image: '../../../assets/images/trusted-partner/ShockwaveMedical.webp' },
    { name: 'Spectranetics', image: '../../../assets/images/trusted-partner/Spectranetics.jpg' },
    { name: 'StJudeMedical', image: '../../../assets/images/trusted-partner/StJudeMedical.png' },
    { name: 'ZOLL', image: '../../../assets/images/trusted-partner/ZOLL.png' },
  ];
  experts = [
    {
      image: '../../../assets/images/expert-photos/AndreaNatale.png',
      name: 'Andrea Natale',
      role: 'Cardiac Electrophysiologist',
      description: 'Texas Cardiac Arrhythmia',
    },
    {
      image: '../../../assets/images/expert-photos/MichaelGibson.png',
      name: 'Michael Gibson',
      role: 'Cardiologist',
      description: 'Harvard Medical School',
    },
    {
      image: '../../../assets/images/expert-photos/ThomasBlevins.png',
      name: 'Thomas Blevins',
      role: 'Endocrinologist',
      description: 'Texas Diabetes & Endocrinology',
    },
    {
      image: '../../../assets/images/expert-photos/RALPHDeFronzo.png',
      name: 'Ralph DeFronzo',
      role: 'Endocrinologist',
      description: 'UT Health San Antonio',
    },
    {
      image: '../../../assets/images/expert-photos/PaulTucker.png',
      name: 'Paul A. Tucker',
      role: 'Cardiologist',
      description: 'Texas Heart & Vascular',
    },
    {
      image: '../../../assets/images/expert-photos/RodneyHorton.png',
      name: 'Rodney Horton',
      role: 'Cardiac Electrophysiologist',
      description: 'Texas Cardiac Arrhythmia',
    },
    {
      image: '../../../assets/images/expert-photos/RobertChilton.png',
      name: 'Robert Chilton',
      role: 'Cardiologist',
      description: 'UT Health San Antonio',
    },
    {
      image: '../../../assets/images/expert-photos/SushPrusty.png',
      name: 'Sush Prusty',
      role: 'ER Physician',
      description: 'Southcoast Health Urgent Care Centers',
    },
    {
      image: '../../../assets/images/expert-photos/CraigWalker.png',
      name: 'Craig Walker',
      role: 'Cardiologist',
      description: 'Cardiovascular Institute of the South',
    },
    {
      image: '../../../assets/images/expert-photos/JohnAllison.png',
      name: 'John Allison',
      role: 'Cardiac Electrophysiologist',
      description: 'Texas Cardiac Arrhythmia',
    },
    {
      image: '../../../assets/images/expert-photos/JayMathews2.png',
      name: 'Jay Mathews',
      role: 'Cardiologist',
      description: 'Manatee Memorial Hospital',
    },
    {
      image: '../../../assets/images/expert-photos/GuruKowlgi.png',
      name: 'Guru Kowlgi',
      role: 'Cardiac Electrophysiologist',
      description: 'Mayo Clinic',
    },
    {
      image: '../../../assets/images/expert-photos/SamSears.png',
      name: 'Sam Sears',
      role: 'Professor of Cardiac Psychology',
      description: 'East Carolina University',
    },
    {
      image: '../../../assets/images/expert-photos/AseemDesai.png',
      name: 'Aseem Desai',
      role: 'Cardiac Electrophysiologist',
      description: 'Mission Heritage Medical Group',
    },
    {
      image: '../../../assets/images/expert-photos/MichelleRouthenstein.png',
      name: 'Michelle Routhenstein',
      role: 'Registered Dietitian Nutritionist',
      description: 'Entirely Nourished',
    },
  ];
  logos = [
    { src: '../../../assets/images/keys-partner/BID.png', alt: 'BID' },
    { src: '../../../assets/images/keys-partner/StDavid_sMedicaCenter.png', alt: "St. David's Medical Center" },
    {
      src: '../../../assets/images/keys-partner/KansasCityHeartRhythmInstitute.png',
      alt: 'HCA MidWest Health',
    },
    { src: '../../../assets/images/keys-partner/TCA.png', alt: 'Texas Cardiac Arrhythmia' },
    { src: '../../../assets/images/keys-partner/TexasDiabetesEndocrinology.jpg', alt: 'TexasDiabetesEndocrinology' },
    { src: '../../../assets/images/keys-partner/StanfordHealthCare.png', alt: 'StanfordHealthCare' },
    { src: '../../../assets/images/keys-partner/TexasHeartVascular.jpg', alt: 'TexasHeartVascular' },
    { src: '../../../assets/images/keys-partner/VirginiaCardiovascularSpecialties.png', alt: 'VCN' },
    { src: '../../../assets/images/keys-partner/Ascension.png', alt: 'Ascension' },
    { src: '../../../assets/images/keys-partner/HeartHealthCommunity.jpg', alt: 'Heart health community' },
    { src: '../../../assets/images/keys-partner/Outgrow.png', alt: 'Outgrow' },
    { src: '../../../assets/images/keys-partner/ConnectWell.png', alt: 'ConnectWell' },
  ];
  customerReviews = [
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
    {
      reviewerName: 'DSDGrammy',
      reviewHeader: 'EXCELLENT!!!',
      stars: 5,
      reviewDetail:
        "I turned to CardioVisual to research Atrial Fibrillation because my husband experienced this during a medical procedure. I had no idea what it actually was. I was very impressed with the explanation and videos of the heart that CV offered. They were clear, precise, and easy to understand. I was then able to explain to my family what was going on. I have never had a strong understanding of medical terms and issues, so it has been somewhat frightening for me. With CardioVisual, I can read their info on any topic I need to research. I feel like having CardioVisual is like having a 'doctor in the house' to help me understand what my family member is going through and how I can help them. Every doctor should tell their patients about CV. Knowledge at your fingertips reduces fear of the unknown. Thank you, CardioVisual!!!",
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
      imageSrc: '../../../assets/images/newsData/Leading Innovation.png',
      alt: 'Leading Innovation',
      title: 'Leading Innovation: Physician Entrepreneur Develops App to Engage Patients',
      description:
        'Learn how Dr. Manish Chauhan turned an idea into CardioVisual, an app empowering clinicians and patients with clear, physician-approved video education on heart health.',
      category: 'Cardiac Sciences',
      link: 'https://www.texmed.org/Template.aspx?id=55867',
    },
    {
      imageSrc: '../../../assets/images/newsData/Heart Healthy App 2020.png',
      alt: 'Top Heart Healthy Apps & Devices For 2020',
      title: 'Top Heart Healthy Apps & Devices For 2020',
      description: ' See CardioVisual as a featured Top Heart Healthy App by Madison Avenue CardioVascular.',
      category: 'Cardiac Sciences',
      link: 'https://www.cardiologistnyc.com/blog/top-heart-healthy-apps-devices-for-2020',
    },
    {
      imageSrc: '../../../assets/images/newsData/interactive digital health tools.png',
      alt: 'Engaging People in Their Health with Interactive Digital Health Tools',
      title: 'Engaging People in Their Health with Interactive Digital Health Tools',
      description:
        ' Discover how digital health tools, like CardioVisual, are transforming coronary heart disease prevention through interactive risk assessments and education.',
      category: 'Cardiac Sciences',
      link: 'https://cmsapi.disolutions.net/media/Interactive Tools.pdf',
    },
  ];
  digitalSolutionsData = [
    {
      imageSrc: '../../../assets/images/digital-solutions/Custom-Website.png',
      alt: 'Custom Website',
      title1: 'For clinics &',
      title2: 'provider systems',
      subtitle: 'Custom Website',
      link: 'https://medicalvisual.com/product/',
      // description: 'For clinics & provider systems',
    },
    {
      imageSrc: '../../../assets/images/digital-solutions/CV-App.png',
      alt: 'Mobile App',
      title1: 'For on-the-go',
      title2: 'clinicians',
      subtitle: 'Mobile App',
      link: 'https://cardiovisual.com/',
      // description: 'For on-the-go clinicians',
    },
    {
      imageSrc: '../../../assets/images/digital-solutions/Social-Media-Phone.png',
      alt: 'Social Media',
      title1: 'For everyday',
      title2: 'learning',
      subtitle: 'Social Media',
      link: 'https://linktr.ee/MedicalVisualSocials',
      // description: 'For everyday learning',
    },
  ];
  youtubVideoContent: any = null;
  selectedReview: any = null;
  contentData = [
    {
      title: 'Heart Health Education',
      link: 'https://heart.medicalvisual.com',
      image: '../../../assets/images/Heart Health Education.png',
    },
    {
      title: 'Diabetes Education',
      link: 'https://diabetes.medicalvisual.com/',
      image: '../../../assets/images/Diabetes Education.png',
    },
    {
      title: 'Diabetes Self-Management Education',
      link: 'https://diabetes.medicalvisual.com/ADA',
      image: '../../../assets/images/Diabetes Self Management Education.png',
    },
  ];

  customWebsiteContent = [
    {
      title: 'Medical Practices',
      image: '../../../assets/images/Medical Practice_Hospital.png',
      hoverImage: '../../../assets/images/Medical Practice_Hospital.png',
      altText: '& Hospitals',
      link: 'https://tca.medicalvisual.com/',
    },
    {
      title: 'Specialized Clinics',
      image: '../../../assets/images/Clinics_Centers.png',
      hoverImage: '../../../assets/images/Clinics_Centers.png',
      altText: '& Centers',
      link: 'https://cardiacrehab.medicalvisual.com/',
    },
    {
      title: 'Surgical & Procedure',
      image: '../../../assets/images/Surgical_Procedure.png',
      hoverImage: '../../../assets/images/Surgical_Procedure.png',
      altText: 'Facilities',
      link: 'https://cathlab.medicalvisual.com/',
    },
  ];

  clinicalResources = [
    {
      title: 'Customize Website',
      image: '../../../assets/images/Custom Website Thumbnail.png',
      hoverImage: '../../../assets/images/Custom Website Thumbnail.png',
      link: 'https://medicalvisual.com/product/',
    },
    {
      title: 'Download QR Sheets',
      image: '../../../assets/images/QR Sheet Thumbnail.png',
      hoverImage: '../../../assets/images/QR Sheet Thumbnail.png',
      link: 'https://cmsapi.disolutions.net/media/heart.medicalvisual.pdf',
    },
    {
      title: 'Download Mobile App',
      image: '../../../assets/images/CV App.png',
      hoverImage: '../../../assets/images/CV App.png',
      link: 'open app link Model',
    },
  ];

  accessToken: string = 'WPL_AP1.KxokNzkjfeIegfwV.bRfwEA==';
  apiUrl: string = 'https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:cardiovisual';
  posts: any[] = [];
  // private clientId = '86vsz9v97nrarl';
  // private clientSecret = 'WPL_AP1.KxokNzkjfeIegfwV.bRfwEA==';
  // private tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.getYoutubVideo();
    this.getLinkedinPosts();
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

  openDialog(openReview: TemplateRef<any>, review?: any): void {
    this.selectedReview = review;
    this.dialog.open(openReview);
  }

  closeDialog(): void {
    this.dialog.closeAll();
    this.selectedReview = null;
  }
  redirect(url: string, appTemplate?: TemplateRef<any>) {
    if (url === 'open app link Model' && appTemplate) {
      this.dialog.open(appTemplate);
    } else if (!url) {
      console.log('no url');
    } else {
      window.open(url, '_blank');
    }
  }

  async getLinkedinPosts() {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.posts = data.elements.map((post: any) => ({
        text: post.text?.text,
        createdTime: new Date(post.created?.time),
      }));
    } catch (error) {
      console.error('Error fetching LinkedIn posts:', error);
    }
  }
}
