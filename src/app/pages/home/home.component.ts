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
      name: 'Splash',
      description: 'An extremely cool event that aims to brighten up the environment of Al-Khair\'s schools by means of enthusiastic volunteers who paint their hearts out on school walls so that they look presentable..'
    },
    {
      image: '../../../../assets/images/SummerInternship.jpg',
      name: 'Summer Internship',
      description: 'A unique experience of spending a few days with the underprivileged students of Idara Al-Khair with exciting activities like teaching, motivational lectures and other fun activities with the students..'
    },
    {
      image: '../../../../assets/images/iftardrive.jpg',
      name: 'Iftar Drive',
      description: 'Every year, Idara Al-Khair hosts iftars at all its campuses where more than 10,000 underprivileged people gather and enjoy fulfilling and scrumptious iftaar during Ramadan. These drives are deemed a hit every year owing to the teachers who volunteers and make it possible.'
    },
  ]
  public slides = [
    {
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      heading: 'MEDICAL FACILITIES',
      subheading: '',
      // tslint:disable-next-line:max-line-length
      text: 'Al-Khair has launched an initiative to establish a full-fledged medical ' +
        'department to handle regular and emergency medical cases of its students and their parents.'
    },
    {
      image: '../../../../assets/images/OrphanCareProgram.jpg',
      heading: 'ORPHAN CARE PROGRAM',
      subheading: '',
      text: 'Al-Khair strives to provide a loving and caring environment for its orphan students, and ensures that they recieve ' +
        'full exposure to family relations and common societal chores.'
    },
    {
      image: '../../../../assets/images/waterwell.jpg',
      heading: 'CLEAN WATER FOR ALL',
      subheading: '',
      text: 'Complete installation of a total of 3 wells has been overseen by Al-Khair in areas ' +
        'where clean drinking water was either scant or totally non-existent.'
    },
    {
      image: '../../../../assets/images/technicalEducation.jpg',
      heading: 'TECHNICAL EDUCATION',
      subheading: '',
      text: 'Apart from making basic education possible, Al-Khair aims to provide training on technical skills by' +
        ' means of its technical centres for both boys and girls.'
    },
    {
      image: '../../../../assets/images/scholarships.jpg',
      heading: 'SCHOLARSHIPS FOR HIGHER EDUCATION',
      subheading: '',
      text: 'Al-Khair has launched a Scholarship Program which enables its alumni with poor ' +
        'financial conditions to complete their further education.'
    },
    {
      image: '../../../../assets/images/environmentalSustainability.jpg',
      heading: 'ENVIRONMENTAL SUSTAINABILITY',
      subheading: '',
      text: 'From conducting awareness campaigns on clean energy to promoting recycling, Al-Khair always takes ' +
        'the environment and its sustainability into serious consideration.'
    },
    {
      image: '../../../../assets/images/daily_lunch.jpg',
      heading: 'FOOD SUPPORT PROGRAM',
      subheading: '',
      text: 'Al-khair efficiently conducts a proper management program for the distribution of lunches and ration bags to its ' +
        'deserving students and their parents.'
    },
    {
      image: '../../../../assets/images/EducationThroughGarbage.jpg',
      heading: 'EDUCATION THROUGH GARBAGE',
      subheading: '',
      // tslint:disable-next-line:max-line-length
      text: 'To meet their running expenses, Idara Al-Khair has adopted the brilliant strategy of collecting useful recyclable ' +
        'items from garbage and selling them to vendors on a dialy basis.'
    },
    {
      image: '../../../../assets/images/qurbani.jpg',
      heading: 'QURBANI',
      subheading: '',
      text: 'Idara Al-Khair organizes an annual Qurbani Program to distribute meat ' +
        'amongst 2500 students\' families on the occasion of Eid-ul-Adha.'
    },
    {
      image: '../../../../assets/images/HelpADream.jpg',
      heading: 'HELP A DREAM',
      subheading: '',
      text: 'Through this campaign, Al-khair appeals donors to sponsor the education of atleast ' +
        'one poor child by means of a proper agreement plan.'
    }
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
