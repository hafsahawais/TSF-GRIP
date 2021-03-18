import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {SwiperComponent, SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {init} from "protractor/built/launcher";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  public mainSlider: SwiperConfigInterface = {
    loop: true,
    speed:1000,
    parallax:true,
    autoplay:{
      delay:8000
    },
    loopAdditionalSlides: 10,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    // on: {
    //   init: () => {
    //     this.autoplay.stop();
    //   },
    //   imagesReady: () => {
    //     this.el.classList.remove('loading');
    //     this.autoplay.start();
    //   }
    // }
  };

  public navSlider: SwiperConfigInterface = {
    loop: true,
    loopAdditionalSlides: 10,
    speed:1000,
    spaceBetween: 5,
    slidesPerView: 5,
    centeredSlides : true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: 'vertical',
    breakpoints: {
      768: {
        direction: 'horizontal',
        slidesPerView: 3,
      }
    }
    // on: {
    //   imagesReady: function(){
    //     this.el.classList.remove('loading');
    //   },
    //   click: function(){
    //     mainSlider.autoplay.stop();
    //   }
    // }
  };
  // @ViewChild(SwiperComponent, {static: false}) componentRef: SwiperComponent;
  @ViewChildren(SwiperDirective) directiveRef: QueryList<SwiperDirective>;


  constructor(private _ActivatedRoute: ActivatedRoute) { }

  projectName = null;
  index = 0;

  projects = [
    {
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      title: 'Medical Facilities',
      content: "Al-Khair has launched an initiative to establish a full-fledged medical department to handle regular and emergency medical cases of our students and their parents.<br/><br/>" +
        "Besides providing education, Al-Khair is actively engaged in social and financial programs for the poor and deprived people of our country. One such initiative is our medical support program that aims to establish a well-grounded medical department fully self-sufficient in order to be able to efficiently meet all regular and emergency cases of students and their parents which we frequently come across in our organization. During our long span of experience, we have witnessed __ boys and __ girls who died young only due to the fact that they were not correctly diagnosed and properly treated. We solemnly consider the health of our students and their parents as one of our top priorities, and rush for the treatment of our ailing students and their parents, even to proper, high-tech hospitals where necessary.<br/><br/>" +
        "It is worthwhile to mention that all these programs being conducted by Idara Al-Khair are organized through the support of donors and philanthropists. It is through this collaboration only that we intend to inaugurate our medical department, so that all sorts of medical cases and emergencies can be dealt with inside our organization instead of rushing patients to hospitals, hence saving crucial time.  Al-Khair and all the beneficiaries appreciate and pray for the kind people who continuously help ease the difficulties of the poverty-stricken and helpless community, and donate unconditionally, out of pure goodness of their hearts.<br/><br/>" +
        "By the grace of Almighty Allah and the help of philanthropists, we have been able to save lives of a few of our students; details of some of them are as under:<br/><br/>" +
        "In view of the above, we request you to help us in establishing a proper medical department with a well-equipped dispensary with staff and pharmacy in Al-Khair. We also feel that the procurement of a suitable ambulance for our ailing students and their parents is extremely necessary, for which, again, we request for your generosity and support."
    },
    {
      image: '../../../../assets/images/OrphanCareProgram.jpg',
      title: 'Orphan Care Program',
      content: "Idara Al-Khair has taken it upon itself to cater to the orphans currently enrolled in one of its campuses by launching the orphan-care program, which serves as a better and more sophisticated alternative to the orphanages operating in the country. Team Al-Khair felt that a lot of the childhood period of orphans is lost in orphan homes, since they are not properly introduced to the society, thus hindering their growth. Given the great void in the life of each and every orphan child, orphans are truly deserving of a loving and caring environment, where they can be exposed to family relations and common societal chores. They are as worthy of being taught the behaviors of living in an organized society and the ways of carrying out day-to-day transactions as children who are blessed with parents. This campaign was designed by Al-Khair keeping in view these factors and requirements. It requires orphan students to gain proper schooling daily from 0730 to 1700 hours after which they are sent to enjoy the rest of the day under proper supervision of a female guardian (paternal or foster), with whom they reside. The team has also planned to arrange jobs like stitching and sewing for these female guardians. The jobs will be provided within the premises of the school. The guardians will also be provided with training on how to manage their house in accordance with their earnings.<br/><br/>" +
        "We also provide widows with sewing machines, after which we connect them to Mr. Mohsin, the owner of a factory and alumnus of Idara Al-Khair. He trains these widows, takes orders and assigns them to the women, and pays them accordingly. It’s an independent sustainable system which benefits many.  <br/><br/>" +
        "The orphan-care program is financed through Zakah and donation, which is normally our primary source of income for such projects. Further details can be found in Annexure-C. It is to be noted that Idara Al-Khair does not ask government agencies to fund these projects. The list of our respected donors can be found attached in Annexure-D. Idara Al-Khair continues to expand these welfare projects with the surging population of Karachi; these expansions, however, come at the cost of increased expenses. While the team leaves no stone unturned in meeting the deficit, it is currently falling short. Hence, Idara Al-Khair is in urgent need of funds to make sure that the expansion of projects is as smooth as possible."
    },
    {
      image: '../../../../assets/images/projects/waterProjects.jpg',
      title: 'Clean Water for All',
      content: "<span>Water Purification Plant in Al-Khair campus-III</span><br/><br/>" +
        "Campus III, established in the year 2011 in Ghulam Hussain Goth, attracted a colossal influx of students due to the fact that the village was home to more than a thousand children desirous of receiving an education but having no means to achieve so. Following the inauguration of Campus III, a hefty enrollment of about 300 students was witnessed in the first year only. While students and their parents were ecstatic at the opening of a school in their residential area, the obvious lack of clean drinking water in the vicinity of the school was definitely a damper to the high spirits. Recognizing the utmost importance of sufficient supply of clean drinking water, we appealed to our kind donors out of whom Miss Afia, from the USA, rose to the occasion magnificently.  She donated for the entire installation of a water-well and an RO (water purification) plant in 2016, which is presently in perfect working order and benefitting not only over a thousand students of campus III but also their parents living in the locale.<br/><br/>" +
        "<span>Water-well in Dadu</span><br/><br/>" +
        "Wai Pandi, Dadu, a village situated in Sindh, is another area which lacks supply of clean drinking water. Idara Al-khair arranged a water-well to be drilled in this area in 2017, and currently 800 villagers are doing well out of it.<br/><br/>" +
        "<span>Water-well in Campus-VIII</span><br/><br/>" +
        "The water-well installed in Campus VIII is benefitting the entire community living in its precincts."
    },
    {
      image: '../../../../assets/images/technicalEducation.jpg',
      title: 'Technical Education',
      content: "Apart from making basic education possible, Al-Khair aims to provide training on technical skills by means of its technical " +
        "centres for both boys and girls.Al-Khair Technical Centre for girls, constructed in the year 2001 at Campus-I, provides training on stitching and sewing work for girls. The number of students enrolled in this technical centre is 180."
    },
    {
      image: '../../../../assets/images/scholarships.jpg',
      title: 'Scholarships for Higher Education',
      content: "Many of our students find themselves facing dead-ends following graduation from school, as all their aspirations of securing admissions in universities are smothered due to their families’ poor financial conditions. To give these bright minds a chance, Idara Al-khair has set up a financial aid scholarship program which has opened up a wide vista of opportunities for the underprivileged. This initiative has enabled us to sponsor higher university education of our graduated alumni."
    },
    {
      image: '../../../../assets/images/environmentalSustainability.jpg',
      title: 'Environmental Sustainability',
      content: "Among pressing problems of poverty, illiteracy and economy, another grave problem persisting in Pakistan since decades now is pollution. Usage of non-sustainable means of energy has contaminated our environment, and it is high time that we realize the importance of sustainable energy and recycling of waste products to keep our air, land and water clean. Idara Al-Khair, being impressively aware of the importance of clean environment, strives to maintain environmental sustainability while managing its institutions’ operations. Four of Al-khair’s campuses are being operated entirely on solar panels, an exceptionally clean source of energy whose effectiveness in preventing global warming and cutting electricity costs can’t be stressed enough. Moreover, being concerned about climatic changes and their effects on our campuses located in various regions of Karachi, we have planted more than 800 trees where our institutions are located, and ensure that each tree survive and matures. We also classify and recycle waste from our campuses, a measure that aims to minimize pollution tenfold rather than multiply it. Furthermore, we regularly arrange for the collection of re-usable items from garbage taken out from homes and set them up for sale at a cheap store that we have put together at Campus-I. This store sells used items like clothes, old furniture etc at cheap rates and currently attracts many students, their parents and other people in the vicinity; items can be purchased on prices as low as 30 rupees. Apart from implementing these prudent measures ourselves, we do our utmost to promote them by conducting awareness campaigns/seminars and plantation drives to educate the populace on environmental sustainability"
    },
    {
      image: '../../../../assets/images/daily_lunch.jpg',
      title: 'Food Support Program',
      content: "In addition to our educational projects, it is worth mentioning that Idara Al-Khair has been catering to daily lunches for its deserving students along with grocery bags for many students’ families since the last twenty years. Details of the food support that we provide are as mentioned:<ul>" +
        "    <li>We provide lunches to 200 orphaned students, other deserving students and teachers on a daily basis</li>" +
        "    <li>We distribute ration bags to 50 teachers and lower staff members on a monthly basis</li>" +
        "    <li>We arrange for the distribution of ration bags to families of about 1700 students every Ramadan with the co-operation of other organizations</li>" +
        "    <li>We ensure monthly distribution of rice to students</li>" +
        "    <li>We responsibly administer to the distribution of ration to those students whose parents are jobless.</li></ul>"
    },
    {
      image: '../../../../assets/images/EducationThroughGarbage.jpg',
      title: 'Education Through Garbage',
      content: "From a mere assemblage of huts to 6 full-fledged school buildings, a college and one technical centre, Idara Al-Khair has come a long way, and is currently a source of education to 3500 students. While our outlay is increasing due to expansion of our educational projects and an increase in the number of admissions, the quantum of donations from different quarters, on the other hand, is relatively diminishing annually which has caused difficulties in meeting our running expenses and the development of our projects. The management of Idara Al-Khair, being worried about meeting the growing expenditures, has been adopting various strategies to earn profit so as to tackle the short-fall in running outgoings. Out of these introduced campaigns, our latest campaign of garbage collection (of recyclable items) aims to produce profit on a daily basis to help us in bearing our increasing expenses. The modus operandi of this campaign is as follows: a team of workers has been formed which goes around to different apartments regularly after school hours in one of our vans which has been allotted for this purpose decorated with our panaflexes and billboards and equipped with a good sound system. The team along with Mr. Mazahir and other representatives imparts speeches before the residents of these apartments, explaining to them the importance of throwaway items which otherwise are quite useful and can be sold. The response to this initiative has been overwhelming and enthusiastic; people would either immediately hand over their throwaway items then and there, or would call later for us to collect their gathered items. People who are in possession of old or discarded household items like furniture and electronic items etc also give these items in donation. <br/><br/>" +
        "<br/><br/>" +
        "We launched this campaign in 2015, and the staff currently engaged in it works purely on voluntary basis. The garbage that we collect comprises recyclable items such as:<ul>" +
        "    <li>Old books and copies</li>" +
        "    <li>Newspapers</li>" +
        "    <li>Plastic items</li>" +
        "    <li>Clothes</li>" +
        "    <li>Iron or steel items</li>" +
        "    <li>Bags</li>" +
        "    <li>Electrical goods</li>" +
        "    <li>Crockery etc.</li>" +
        "<br/><br/></ul>" +
        "We store all these collected items in an allocated room in Campus (I) of our school, situated in Mustafa Colony, New Karachi. We contact vendors of different types of items who regularly visit and purchase items from our inventory of recyclable items. We have also established a discount store that we have set up in school premises which enables poor students, teachers and residents in our vicinity to make their purchases at very low costs. Alhamdulillah, we now sell our used goods to prospective buyers regularly; this has consequently been yielding some income on daily basis. At present, our average sale per day is Rs. 5000, which is expected to rise with the passage of time."
    },
    {
      image: '../../../../assets/images/projects/qurbani.jpg',
      title: 'Qurbani',
      content: "For our students and their families living in slum areas, meat is a delicacy often available to them only on the occasion of Eid-ul-Adha. Hence, Idara Al-Khair leaves no stone unturned in ensuring that these families rightfully enjoy and celebrate this joyous event like all other families who can afford to sacrifice their own animals. We annually organize the Qurbani Program to distribute donated meat packages amongst 2500 students’ families. Our zealous teachers and students give their utmost and participate enthusiastically so as to make this program a massive success every year. "
    },
    {
      image: '../../../../assets/images/HelpADream.jpg',
      title: 'Help a Dream',
      content: "This campaign was launched by Idara Al-Khair at the beginning of 2016. Our research outcome had revealed that poor children living in downtrodden slums with derelict living conditions are usually highly talented, street-smart and intelligent individuals who are in dire need of proper guidance and education to hone their skills, give direction to their talents and become competent in the real world. The schools and college operating under Idara Al-Khair comprise a majority of these bright yet impoverished boys and girls who dream of becoming doctors, engineers, teachers etc; however, their hope of achieving these aspirations seem to be a mere mirage to them, due to the obvious fact that their financial state is sad, if not outright poor.<br/><br/>" +
        "To protect these young talents from wilting away along with their passionate dreams, we took action prudently by devising the ‘Help a Dream’ campaign, where we appeal philanthropists to sponsor at least one such student for their further education and consequently, the realization of their dreams. To make the sponsorship official, we have introduced an agreement in the shape of a sponsorship form, its fee per month being PKR 1000 only. <br/><br/>" +
        "We are hoping to receive active response to help make this initiative a success. Are you willing to be the catalyst that propels these juvenile geniuses towards the realization of their budding visions and goals? "
    }

  ]


  ngOnInit() {
    this.projectName=this._ActivatedRoute.snapshot.paramMap.get("name");
  }

  ngAfterViewInit() {
    this.directiveRef['_results'][0].instance.controller.control = this.directiveRef['_results'][1].instance;
    this.directiveRef['_results'][1].instance.controller.control = this.directiveRef['_results'][0].instance;
  }

  onMainSwiperInit($event: any) {
    // console.log($event)
    $event.autoplay.stop();
    if (this.projectName) {
      if(this.projectName === 'EducationThroughGarbage') {
        this.index=0;
      } else if (this.projectName === 'FoodSupportProgram') {
        this.index=1;
      } else if (this.projectName === 'HelpADream') {
        this.index=2;
      } else if (this.projectName === 'MedicalFacilities') {
        this.index=3;
      } else if (this.projectName === 'OrphanCareProgram') {
        this.index=4;
      } else if (this.projectName === 'Qurbani') {
        this.index=5;
      } else if (this.projectName === 'ScholarshipsForHigherEducation') {
        this.index=6;
      } else if (this.projectName === 'CleanWaterForEveryone') {
        this.index=7;
      }
    }
  }

  onMainSwiperImagesReady($event: any) {
    this.directiveRef['_results'][0].elementRef.nativeElement.classList.remove('loading');
    // this.directiveRef['_results'][0].startAutoplay();
  }

  onNavSwiperImagesReady($event: any) {
    // console.log($event)
    this.directiveRef['_results'][1].elementRef.nativeElement.classList.remove('loading');
  }

  onNavSwiperClick($event: any) {
    this.directiveRef['_results'][0].stopAutoplay();
  }
}
