import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  heading = 'Welcome to Welfare Stablished Since 1898';
  text = '<p>To emphasize the needs and importance of Education in this millennium will ' +
    'be nothing but stereotyped mere words and waste time. The most depressive and frustrating picture ' +
    'about imparting Education and improving literacy rate in the downtrodden and backward section of society is ' +
    'the matter of concern for all of us. The question is who would actually reach them and teach an unwilling child. On the ' +
    'other hand the parents of such children are themselves non cooperative and reluctant to give education to their children for ' +
    'many reasons. A most backward colony in a slum area named Mustafa colony in New Karachi was selected which was full of ' +
    'usual anti social activities like addiction, robbery, child labor, wandering, stealing etc. A jhuggi (hut/make shift) was' +
    ' acquired and teaching started initially with only two students. Idara Al-Khair welfare society was formed and registered' +
    ' in year 1987. After a period of working of more than 25 years with constant devotion, dedication and kind support ' +
    'of several philanthropist, individuals and organizations. ' +
    'We have been able to establish schools, basic health centers’ and vocational training center.</p>';

  public config: SwiperConfigInterface = {
    slidesPerView: 6,
    spaceBetween: 0,
    initialSlide: 3,
    centeredSlides: true,
    loop: true,
    autoplay: true,

    breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      378: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      414: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };

  public logos = [
    '../../../../assets/images/alkhairlogo.png',
    '../../../../assets/images/coop.png',
    '../../../../assets/images/Earthian.png',
    '../../../../assets/images/Japan.png',
    '../../../../assets/images/JFSA.png',
    '../../../../assets/images/LogoOfOneUmmahFoundation.JPG',
    '../../../../assets/images/ThakkatFoundationLogo.png',
    '../../../../assets/images/10pearls.png',
    '../../../../assets/images/hansalim.jpeg'
  ];
  public about = [
    {
      heading: 'Welcome to Welfare Stablished Since 1898',
      text: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli,\n' +
        '          but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
