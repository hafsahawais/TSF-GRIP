import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  date: string;
  color: string;
  heading: string;
  text: string;
}
@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})

export class SchoolsComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }


  public schools = [
    {
      date: 'ESTABLISHED IN 1987',
      color: '',
      heading: 'AL-KHAIR CAMPUS 1',
      text: 'Idara Al-Khair – a warm home to thousands who aspire to be the future of Pakistan, a bright beam of light in the midst of profound darkness ....',
      image: '../../../../assets/images/schools/campus1.jpg'
    }, {
      date: 'ESTABLISHED IN 2002',
      color: '',
      heading: 'AL-KHAIR CAMPUS 2',
      text: 'The city of Karachi inhabits slums which can be classified into three main categories: i) Slums surrounding developed areas ii) Slums encircling undeveloped areas ....',
      image: '../../../../assets/images/schools/campus2.jpg'
    },
    {
      date: 'ESTABLISHED IN 2008',
      color: '',
      heading: 'AL-KHAIR COLLEGE',
      text: 'Al-Khair College of Higher Education, stationed in North Karachi Sector 5M, Karachi...',
      image: '../../../../assets/images/schools/college.jpg'
    },
    {
      date: 'ESTABLISHED IN 2012',
      color: '',
      heading: 'AL-KHAIR CAMPUS 3',
      text: 'Establishing an educational institution in an area as derelict as Kachra Kundi was a great challenge that entailed the most difficult of problems....',
      image: '../../../../assets/images/schools/campus3.jpg'
    },
    {
      date: 'ESTABLISHED IN 2015',
      color: '',
      heading: 'AL-KHAIR CAMPUS 4',
      text: 'Al-Khair Primary School (campus-IV) is situated in Ayub Goth, Manghopir Road, Karachi, and was established in 2015. This campus consists of 3 classrooms, 56 students and 3 teachers.',
      image: '../../../../assets/images/schools/campus4.jpg'
    },{
      date: 'ESTABLISHED IN 2015',
      color: '',
      heading: 'AL-KHAIR CAMPUS 5',
      text: 'Al-Khair College of Higher Education, stationed in North Karachi Sector 5M, Karachi, was established in 2008, and currently provides intermediate....',
      image: '../../../../assets/images/schools/campus5.jpg'
    },{
      date: 'ESTABLISHED IN 2015',
      color: '',
      heading: 'AL-KHAIR CAMPUS 6',
      text: 'Al-Khair Primary School (campus-VI) is located in Yaroo Goth, Karachi, and was inaugurated in 2015....',
      image: '../../../../assets/images/schools/campus6.jpg'
    },{
      date: 'ESTABLISHED IN 2017',
      color: '',
      heading: 'AL-KHAIR CAMPUS 7',
      text: 'Al-Khair Primary School (campus-VII) was established in 2017, and is made up of 5 classrooms, 100 students and 6 teachers.',
      image: '../../../../assets/images/schools/campus7.jpg'
    },
    {
      date: 'ESTABLISHED IN 2020',
      color: '',
      heading: 'AL-KHAIR CAMPUS 8',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam....',
      image: '../../../../assets/images/schools/campus8.jpg'
    },
  ];
  openDialog(name) {
    if(name === 'AL-KHAIR CAMPUS 1') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: 'ESTABLISHED IN 1987',
          color:'#82a6b1',
          heading: name,
          text: '<p>Idara Al-Khair – a warm home to thousands who aspire to be the future of Pakistan, a bright beam of light in the midst of profound darkness. Al-Khair is not merely a school; it is the amalgamation of an idea and a mission, envisioned and hatched by our honorable president, Mr Mazahir, who saw hope in what majority had labeled as a waste of space. The courage with which he never let the candle of hope and belief extinguish laid foundation to what everyone knows today as Idara Al-Khair. \n' +
            'In today’s era, where education is sold to the highest bidders rather than being imparted unconditionally, people who cannot afford an education are confined to poverty and negligence. The initial steps on the tough road to a changed society were taken by Mr Mazahir, who decided to start from Mustafa colony, a hub of all sorts of evil. The place reeked of gambling and theft, and served as a breeding ground for all sorts of criminal activities. The children in this area, who had already begun to get affected, had to be kept away from becoming skilled thieves and gamblers. With the gloom of illiteracy and corruption threatening to triumph, Mr Mazahir walked in bearing the torch of hope and education.\n' +
            '\n' +
            'Initially, he was faced with major opposition against this transition, which was totally unparalleled to the people’s way of thinking; the idea that education can improve the living conditions of people was entertained as highly unpopular. When parents of children did not yield to the idea of their children receiving education, Mr Mazahir took it upon himself to budge their minds by getting involved with a few children and educating them. This earned him the trust of five children. He bought a hut and started teaching his new, though scant in number, students. He soon discovered that these students were not only hungry for education but were also highly insightful. The meek flame which could barely light up the murkiness soon gained magnitude in its warmth and intensity; word spread, more students joined in, and within a span of six months Mr Mazahir found himself in need of more huts as a single hut was too small to house the new number of students, which had climbed to and crossed an incredible one hundred. Apart from the task of acquiring more huts, more teachers had to be recruited to cater to the ever increasing population of students. Mr Mazahir bought neighboring huts to expand his school while relocating the resident families to other areas of the colony. The matter of more teachers, however, was still unaddressed. This was the more troublesome issue, since teachers were not willing to cross over to the terror-stricken Mustufa colony.\n' +
            '\n' +
            '\n' +
            'Fortune has always paved its way to favor the dauntless, however. Inspired by Mr Mazahir’s painstaking efforts, some teachers eventually did join hands in his mission to educate the neglected facet of Pakistan. Another affair to be tackled was to introduce girls to the classroom so as to break the stereotypical mindset which implied that only the male can shoulder the responsibility of serving as the breadwinner to a family. Mr Mazahir met with the heads of families and preached to them the importance of education for both the genders. The result proved to be slow yet fruitful; girls soon started attending classes, and turned out to have a studious streak more pronounced than boys. The continual preaching consequently led to an influx of girls into classrooms.\n' +
            'The next ultimatum was to collect the funds required to convert this collection of huts into a proper school, which Mr Mazahir met bravely. From waiting for hours on end under the glaring sun to meet business men and investors to using his power of persuasion to convert their incredulity into belief, he continued on the journey of this arduous venture. Slowly and gradually, enough funds were collected, and in 1990, the infrastructure of the school that we see standing today was realized. The 1,300 square yards covered by huts were transformed into a 78-room building having state-of-the-art classrooms, laboratories, cafeteria and every fundamental requirement of a proper school. At present, more than 200 students apply at Idara Al-Khair annually to start their voyage on the path to knowledge. The school possesses skilled teachers for all grade levels from primary to intermediate, and has left no stone unturned to ensure that students find their vision. Every year, the family of Idara Al-khair grows ever so strong with new students being admitted every year. We truly hope that this initiative becomes a never-ending process so that no child is deprived of education and the literacy rate of Pakistan goes up thousands of notches.\n' +
            '<h2>OUTCOME</h2>\n' +
            '\n' +
            'The outcome of the seed planted by Mr Mazahir has been nothing short of inspiring. The rate of criminals being produced by Mustufa colony has fallen sharply, while the rate of fresh, young blood being discovered has reached new heights. Some students have secured admissions into universities after their intermediate. Furthermore, parents now encourage their children to continue their studies. The literacy rate of females has increased, and drug and child abuse have been eradicated from the area. Moreover, child labor has plummeted to a great extent, and living standards of families have improved since their heir now possess decent education and can land respectful jobs. \n' +
            'The sole reason behind this drastic transfiguration is education. Education is the sole catalyst for changing lives. The colony suffering from erosion due to crimes harbored potential; all it needed was a nudge in the right direction, which came in the form of Idara Al Khair.\n</p>'
        }
      });
    } else if(name === 'AL-KHAIR CAMPUS 2') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: 'ESTABLISHED IN 2002',
          color:'#3E5D7D',
          heading: name,
          text: '<p>The city of Karachi inhabits slums which can be classified into three main categories:<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;i) Slums surrounding developed areas<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;ii) Slums encircling undeveloped areas<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;iii) Countryside slums i.e. slums which are isolated from cities and village<br></p>' +
            '<br>' +
            '<p>Children from interior Sindh, lower Punjab and Balochistan are permanently settled in countryside slums. Idara Al- Khair’s primary focus was concentrated on the children from the second and third categories, since children hailing from these areas were at serious risk.</p>' +
            '<p>In 2002, Mr Mazahir, President of Idara Al-Khair, visited a village named Goth Jam Chakro. This village housed 400 families and basically served as a dumping space for garbage and waste coming from 400-500 garbage disposal trucks daily. The resident families were consequently subjected to harsh and unhygienic living conditions, and their major means of income was sorting through the mounds of dumped garbage in search for recyclable items that could be sold, like glass and steel. The dilapidation was extreme; the land they lived on was nothing but garbage, the air they breathed in was nothing but intoxicated fumes from burnt waste.</p>' +
            '<p>The children of this village sustained injuries and bruises owing to the harsh job that they undertook daily to earn a living. Even 4-year olds lent their tiny helping hands to ensure the survival of their families. These heart-wrenching conditions compelled Mr. Mazahir to bring about a permanent change in this village. It was over-whelming to see innocent youth withering away in such a disgraceful manner, and while donations for food and clothes were direly needed, they were just a temporary solution, as food would run out and clothes would be outgrown by the children. To initiate and bring about a revolution, a small open-air school was started on the garbage-strewn land, since education was the best and the more permanent solution. A blackboard was propped up where majority of the children were found to be working</p>' +
            '<p>Success was neither easy nor instant; the board attracted 0 students the first day, as they stayed indulged in their routine work. The second day proved to be a promising one, when a few curious students showed up at the board and thus began their journey on the road to enlightenment. The small lecture that day ignited their spark for learning; a few days later, inspiration had reached many hearts as word spread. The board had gripped the interest of 58 students within 15 days, and a makeshift hut was put together to lodge students. Further six makeshift huts were set up to accommodate the increasing population of students. Unfortunately, nature had its own plans; a merciless storm wrecked the hopes of students as it crashed upon the classrooms and brought the village back to where it started.</p>'+
            '<p>Exhibiting his nerves of steel and iron-clad determination, Mr. Mazahir refused to surrender to the circumstances and called for a proper school to be made. His tireless efforts turned his vision into reality and a properly-built school comprising 9 rooms came into being. The students were now 350 in number and hence, more teachers were required. This proved to be a tough feat; lack of security, poor hygiene, and a school encompassed with smoke and garbage hardly bore any appeal. At this point, the students of Al-Khair Campus 1 came through to help by imparting what they had been taught, forming a beautiful bond of brotherhood.\n' +
            '<p>The next problem waiting to be tackled was the unavailability of water in the area. There was no concept of clean living or even simple baths. This was also the reason why professional teachers were refusing to be part of the mission. Water was then arranged for the school, and its availability led to the establishment of proper sanitation and consequently a better environment to study in. This new, blessed phase of life for the students meant that they no longer had to rely on working in the dump for a living. Some students still continued to work in the dump to support their families but not for long; a new lifestyle was adopted where children were eager to read whatever they found. They read text on wrappers, books, sign boards and pretty much everything that was readable.</p>' +
            '<p>The arrival of Idara al khair in Goth Jam Chakro changed many of its customs. Early marriages, which were highly popular in the village, became unpopular when children began to decline offers of marriage in favor of education. The students were now interested in acquiring professional jobs, which many of them were able to accomplish. Many students moved out of the village in pursuit of better opportunities.</p>' +
            '<p>When Thaakat Foundation visited us again in 2015, it saw Campus 2 struggling to receive the required funds from donors. Hence, in 2016, the foundation decided to financially adopt this campus along with Al Khair.</p>'
        }
      });
    } else if(name === 'AL-KHAIR CAMPUS 3') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: 'ESTABLISHED IN 2012',
          color:'#4D92EB',
          heading: name,
          text: '<p>Establishing an educational institution in an area as derelict as Kachra Kundi was a great challenge that entailed the most difficult of problems. Air intoxicated with smoke and putrid smells, and land strewn with garbage and litter, the environment prevailing in Kachra Kundi is injurious. Added to that, lack of civic facilities like water, electricity, gas, sewerage system etc deems its living conditions as pitiable.</p>' +
            '<p>By the grace of Almighty Allah, however, we were able to start an educational project here in the year 2002. The Idara Al-Khair Secondary School in Kachra Kundi area (Jam Chakro Village) has been successfully running since the last 12 years by our management, during which we gained vision-broadening experiences. According to our findings, children living in villages encircling Kachra Kundi were deprived of proper education, and while a few children from adjacent villages would regularly come to the school in Kachra Kundi by mapping the 4 to 5 kilometers on feet, the remaining children and their parents were not in favor of joining the school due to the obvious difficulties and toxic atmosphere in its locale. Also, the existing environment of our school in Kachra Kundi did not appeal to good and qualified teachers, who did not agree to join us. Moreover, our survey detected that while many villages around Kachra Kundi possessed ghost schools being run by the government, none of them actually served the purpose, since the appointed teachers were mostly inefficient and unable to perform their duties regularly, and in some schools, just one or two teachers had been appointed against a large number of students (exceeding 100-200). These factors consequently drove Al-Khair to hatch a plan on inaugurating another educational project outside of Kachra Kundi through which proper education would be accessible to children from all villages, and whose environment would appeal to students and teachers alike. Al-Khair also carried out a survey in the neighboring villages to fully determine the success rate for its proposed project.  </p>' +
            '<p>The villages surveyed were Yousuf Goth, Khamiso Goth, Khuda Ki Basti, Shahbaz Colony, Shahnawaz colony and Ayub Goth, along with some others. Al-Khair interviewed many children’s parents living in the aforesaid villages to gauge the extent of their willingness about getting a large school established for their children outside the Kachra Kundi area, and received a very positive response; they were extremely glad and desperately wanted such a school to be constituted. Hence, by the blessings of Allah, the kind help of our supporters and our tireless efforts, all theoretical work for a school outside of Kachra Kundi was finalized and the building process of the proposed Campus III was initiated and completed timely. It is situated in Ghulam Hussain Village on our purchased 2 acres of land which is located at a mid-point between Kachra Kundi and each of its surrounding villages. Al-Khair Campus III consists of 26 classrooms, 38 teachers and 820 students enrolled for free education. The students of secondary classes of our existing school in Kachra Kundi have also been shifted to Campus III so as to be able to utilize the services of our newly inducted qualified teachers. We have also planned on allocating the school in Kachra Kundi up to the level of primary education only. The efficient and timely implementation of these plans and projects would never have been possible without the help of our donors and philanthropists. </p>' +
            '<p>The children of this area have the potential to revolutionize their lives and the society around them provided that they are given proper education and guidance. Idara Al-Khair strives to support these children and supply the best possible facilities for their education as well as their parents’ sustenance. It is Al-khair’s goal to enrich these deprived students such that every single student is equipped with the virtue of character, confidence, knowledge and intelligence, and that they all prove to be a part of the force in bringing a silent revolution capable of changing the fate of their families and the nation as a whole.</p>' +
            '<p>Thaakat Foundation is our financial partner for this campus. Due to their constant support since 2012, Idara Al-Khair has been able to achieve a lot till date.</</'
        }
      });
    } else if(name === 'AL-KHAIR CAMPUS 4') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: 'ESTABLISHED IN 2015',
          color:'#052B54',
          heading: name,
          text: '<p>Al-Khair Primary School (campus-IV) is situated in Ayub Goth, Manghopir Road, Karachi, and was established in 2015. This campus consists of 3 classrooms, 56 students and 3 teachers.</p>'
        }
      });
    } else if(name === 'AL-KHAIR CAMPUS 5') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: 'ESTABLISHED IN 2015',
          color:'#191C50',
          heading: name,
          text: '<p>Al-Khair Primary School (campus-V) is situated in Gul Muhammad Goth, Bun Murad, Manghopir, Karachi, and was established in 2015. This campus constitutes 6 classrooms, 460 students and 21 teachers.</p>'
        }
      });
    } else if(name === 'AL-KHAIR CAMPUS 6') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: 'ESTABLISHED IN 2015',
          color:'#82a6b1',
          heading: name,
          text: '<p>Al-Khair Primary School (campus-VI) is located in Yaroo Goth, Karachi, and was inaugurated in 2015. It was composed of 500 students and 27 teachers, and its building comprised 16 classrooms. However, in 2017, we lost the lease to the premises and appealed to Thaakat Foundation for support. It is due to its timely aid that we are currently building a new facility for Campus-VI.</p>'
        }
      });
    } else if(name === 'AL-KHAIR CAMPUS 7') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: 'ESTABLISHED IN 2017',
          color:'#3E5D7D',
          heading: name,
          text: '<p>Al-Khair Primary School (campus-VII) was established in 2017, and is made up of 5 classrooms, 100 students and 6 teachers.</p>'
        }
      });
    } else if(name === 'AL-KHAIR CAMPUS 8') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: 'ESTABLISHED IN 2020',
          color:'#224469',
          heading: name,
          text: '<h2>lorem ipsum</h2><p>hjkdsjhljkhajhljhfdsjk</p>'
        }
      });
    } else if(name === 'AL-KHAIR COLLEGE') {
      this.dialog.open(SchoolDialog,{
        width:'750px',
        data: {
          date: 'ESTABLISHED IN 2008',
          color:'#224469',
          heading: name,
          text: '<p>Al-Khair College of Higher Education, stationed in North Karachi Sector 5M, Karachi, was established in 2008, and currently provides intermediate education to 110 students. It has 9 professors and 6 classrooms.</p>'
        }
      });
    }
  }
  ngOnInit() {
  }

}


@Component({
  selector: 'school-dialog',
  templateUrl: './school-dialog.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolDialog {

  constructor(
    public dialogRef: MatDialogRef<SchoolDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
