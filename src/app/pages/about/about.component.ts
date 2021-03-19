import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  heading = 'About The Sparks Foundation (TSF)';
  text = '<p>The Sparks Foundation is a not-for-profit organization registered in India and Singapore and operating globally.<br/><br/>We inspire students to innovate and help them integrate to build better humankind.</p>';

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
