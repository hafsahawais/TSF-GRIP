import {Component, Inject, OnInit} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

// @ts-ignore

export interface DialogData {
  // tslint:disable-next-line:ban-types
  heading: String;
  // tslint:disable-next-line:ban-types
  review: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public number: number = 1000;

  public events = [
    {
      image: '../../../../assets/images/splash.jpg',
      name: 'Unpaid Internship',
      description: "This is an unpaid internship of a month during which you'll be trained, mentored and observed future role."
    },
    {
      image: '../../../../assets/images/SummerInternship.jpg',
      name: 'Flexible working hours',
      description: 'During the course of the internship you will be expected to work from home with the flexibility to manage your time. The tasks assigned are easy and can be finished in your extra time.'
    },
    {
      image: '../../../../assets/images/iftardrive.jpg',
      name: 'Own computers and internet',
      description: "You'll use your own computers with internet connections and coordinate with your team members through Whatsapp or Google Hangout calls, etc."
    },
  ]
  public slides = [
    {
      image: '../../../../assets/images/phone.jpg',
      heading: 'Scheduled Calls',
      subheading: '',
      // tslint:disable-next-line:max-line-length
      text: 'Regular contact with core team members via live sessions.'
    },
    {
      image: '../../../../assets/images/orphan.png',
      heading: 'Mentor Support',
      subheading: '',
      text: 'Our mentors are there to guide and support you at any time. You can reach the mentors through email or whatsapp.'
    },
    {
      image: '../../../../assets/images/waterwell.jpg',
      heading: 'Discussion Forum',
      subheading: '',
      text: 'You will be asked to join The Sparks Foundation Network group on LinkedIn. Here ,your mentors and facilitators will answer your task queries.'
    },
    {
      image: '../../../../assets/images/support.png',
      heading: 'On Demand Support',
      subheading: '',
      text: 'If you feel the need, you can mail us for help. We will guide you to the correct resources.'
    },
    // {
    //   image: '../../../../assets/images/scholarships.jpg',
    //   heading: 'SCHOLARSHIPS FOR HIGHER EDUCATION',
    //   subheading: '',
    //   text: 'Al-Khair has launched a Scholarship Program which enables its alumni with poor ' +
    //     'financial conditions to complete their further education.'
    // },
    // {
    //   image: '../../../../assets/images/environmentalSustainability.jpg',
    //   heading: 'ENVIRONMENTAL SUSTAINABILITY',
    //   subheading: '',
    //   text: 'From conducting awareness campaigns on clean energy to promoting recycling, Al-Khair always takes ' +
    //     'the environment and its sustainability into serious consideration.'
    // },
    // {
    //   image: '../../../../assets/images/daily_lunch.jpg',
    //   heading: 'FOOD SUPPORT PROGRAM',
    //   subheading: '',
    //   text: 'Al-khair efficiently conducts a proper management program for the distribution of lunches and ration bags to its ' +
    //     'deserving students and their parents.'
    // },
    // {
    //   image: '../../../../assets/images/EducationThroughGarbage.jpg',
    //   heading: 'EDUCATION THROUGH GARBAGE',
    //   subheading: '',
    //   // tslint:disable-next-line:max-line-length
    //   text: 'To meet their running expenses, Idara Al-Khair has adopted the brilliant strategy of collecting useful recyclable ' +
    //     'items from garbage and selling them to vendors on a dialy basis.'
    // },
    // {
    //   image: '../../../../assets/images/qurbani.jpg',
    //   heading: 'QURBANI',
    //   subheading: '',
    //   text: 'Idara Al-Khair organizes an annual Qurbani Program to distribute meat ' +
    //     'amongst 2500 students\' families on the occasion of Eid-ul-Adha.'
    // },
    // {
    //   image: '../../../../assets/images/HelpADream.jpg',
    //   heading: 'HELP A DREAM',
    //   subheading: '',
    //   text: 'Through this campaign, Al-khair appeals donors to sponsor the education of atleast ' +
    //     'one poor child by means of a proper agreement plan.'
    // }
  ]

  public testimonials = [
    {
      image: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/23031514_1485657294864391_1302525528571438327_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=DJdX6dcoS0wAX_VEEG_&_nc_ht=scontent.fkhi6-1.fna&oh=3089ba5f867a1b7489f97686eec91cd0&oe=5FA36656',
      name: 'Musaib Ahmed Razzaqui',
      backgroundImage: '../../../../assets/images/testimonial1.jpg',
      review: 'After four amazing days at Idara Al Khair, i can comfortably say that its been one of the best weeks I have ever experienced!',
      platform: '',
      handle: ''
    },
    {
      image: 'http://adamthemes.com/demo/code/cards/images/avatar3.png',
      name: 'John Doe',
      backgroundImage: '../../../../assets/images/testimonial2.jpg',
      review: '---------------------------------------------------------------------------------------------',
      platform: '',
      handle: ''
    },
    {
      image: 'http://adamthemes.com/demo/code/cards/images/avatar3.png',
      name: 'John Doe',
      backgroundImage: '../../../../assets/images/testimonial3.jpg',
      review: '---------------------------------------------------------------------------------------------',
      platform: '',
      handle: ''
    },

  ]

  public config: SwiperConfigInterface = {
    effect: 'coverflow',
    initialSlide: 0,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : false,
    },
    pagination: {
      el: '.swiper-pagination',
    }
  };

  public testimonialConfig: SwiperConfigInterface = {
    effect: 'slide',
    parallax: true,
    initialSlide: 0,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
    }
  };
  volunteerForm: FormGroup;
  counto: any ;
  counto3: any;
  counto2: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private ContactService: ContactService, public dialog: MatDialog) {
    this.createForm();
  }
  openDialog(name) {
    if (name === 'Musaib Ahmed Razzaqui') {
      this.dialog.open(TestimonialDialog, {
        hasBackdrop: true,
        width: '750px',
        data: {
          heading: 'Testimonial',
          // tslint:disable-next-line:max-line-length
          review: '<p>After four amazing days at Idara Al Khair, i can comfortably say that its been one of the best weeks I have ever experienced!\n' +
            'Although i missed out on the first two days (and on the fun *sighs*) I didnt find it hard to mingle or interact with the interns or the volunteers.\n' +
            'Contary to general opinion, I felt that not giving us an hour long lecture on teach ing was a good decision as in this way we were open to a whole new world, left to discover your inner abilities, and it was a tremendous journey of self exploration.\n' +
            'The visit to campus 3 was heartbreaking, and to be brutally honest i did feel a bit guilty. Seeing kids half my size and age, going through all that they are forced to go through by this cruel life, and still finding a reason to smile and cheer upon; it was a beautiful sight. It dawned upon me that if the kids can still come to school just to gain knowledge, despite no electricity, despite no water, despite the horrible hygienic conditions, what excuse do we have for procrastinating and laziness?\n' +
            'It really amazed me to see the dedication of the kids towards their skits and presentations. They were unexpectedly vocal and outspoken and it was heartwarming to see them up there on stage.\n' +
            '\n' +
            'On a lighter note though, there is always room for improvement. The program could\'ve been done in a better way and would have attracted more interns, if the social media would have been utilized in the best possible way. Other than that, the program was smooth and a truly magical experience.\n' +
            '\n' +
            'So if anyone asks me if I would wish to go through this all over again; all the fun, all the laughter, all the teaching, the dancing xD, the chit chats, the early morning trips, I\'ll say yes in a heartbeat. </p>'
        }
      });
    }
  }
  ngOnInit() {
  }
  createForm() {
    this.volunteerForm = this.fb.group({
      name:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  sendVolunteerRegisteration(name, email, phone, message) {
    if (this.volunteerForm.valid) {
      this.ContactService.sendVolunteerRegisteration(name, email, phone, message).subscribe(success => {
        // this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
        console.log('email sent', success);
      }, error => {
        console.log(error);
        // this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      });
    }
  }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'testimonial-dialog',
  templateUrl: './testimonial-dialog.html',
  styleUrls: ['./home.component.scss']
})

// tslint:disable-next-line:component-class-suffix
export class TestimonialDialog {

  constructor(
    public dialogRef: MatDialogRef<TestimonialDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
