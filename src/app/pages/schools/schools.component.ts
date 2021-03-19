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
      date: '',
      color: '#B0D85B',
      heading: 'Confirm Your Internship Function',
      // tslint:disable-next-line:max-line-length
      text: 'Go through the brief JD of internships below to make sure you have applied or are applying for the correct one...',
      image: '../../../../assets/images/schools/campus1.jpg'
    }, {
      date: '',
      color: '',
      heading: 'Join TSF Network',
      text: 'Join our discussion forum - The Sparks Foundation Network group on LinkedIn ....',
      image: '../../../../assets/images/schools/campus2.jpg'
    },
    {
      date: '',
      color: '',
      heading: 'Share your Preferred Internship Experience',
      text: 'Open Interest Form : GRIP@TSF to select your domain...',
      image: '../../../../assets/images/schools/college.jpg'
    },
    {
      date: '',
      color: '',
      heading: 'Create your profile on My Credible Info',
      text: 'Open This link....',
      image: '../../../../assets/images/schools/campus3.jpg'
    },
    {
      date: '',
      color: '',
      heading: 'Wait for GRIP Selection Certificate',
      text: 'GRIP selection certificates are sent in the last week of each month after evaluating your profile...',
      image: '../../../../assets/images/schools/campus4.jpg'
    },{
      date: '',
      color: '',
      heading: 'Step Completion Checklist',
      text: 'By now, you should have completed these....',
      image: '../../../../assets/images/schools/campus5.jpg'
    },
    // {
    //   date: 'ESTABLISHED IN 2015',
    //   color: '',
    //   heading: 'AL-KHAIR CAMPUS 6',
    //   text: 'Al-Khair Primary School (campus-VI) is located in Yaroo Goth, Karachi, and was inaugurated in 2015....',
    //   image: '../../../../assets/images/schools/campus6.jpg'
    // },
    // {
    //   date: 'ESTABLISHED IN 2017',
    //   color: '',
    //   heading: 'AL-KHAIR CAMPUS 7',
    //   text: 'Al-Khair Primary School (campus-VII) was established in 2017, and is made up of 5 classrooms, 100 students and 6 teachers.',
    //   image: '../../../../assets/images/schools/campus7.jpg'
    // },
    // {
    //   date: 'ESTABLISHED IN 2020',
    //   color: '',
    //   heading: 'AL-KHAIR CAMPUS 8',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam....',
    //   image: '../../../../assets/images/schools/campus8.jpg'
    // },
  ];
  openDialog(name) {
    if(name === 'Confirm Your Internship Function') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: '',
          color:'#B0D85B',
          heading: name,
          text: '<p> <ul> <li>' +
            'Go through the brief JD of internships below to make sure you have applied or are applying for the correct one</li>' +
            '<li>The internship function will be mentioned on your GRIP selection certificate</li> ' +
            '<strong>Web Development</strong>' +
            '<li><a href="https://docs.google.com/document/d/1QmqPQVjTAlLL18nZBU5Mx7lqh0yF1jnvQKJXOWSct30/edit">https://docs.google.com/document/d/1QmqPQVjTAlLL18nZBU5Mx7lqh0yF1jnvQKJXOWSct30/edit</a></li>' +
            '<strong>Mobile App Development</strong>' +
            '<li><a href="https://docs.google.com/document/d/12lAGdYmBnIhNBCfJAI9gEGyfh_KJVTjTa7HOH1kllyI/edit">https://docs.google.com/document/d/12lAGdYmBnIhNBCfJAI9gEGyfh_KJVTjTa7HOH1kllyI/edit</a></li>\'</li>' +
            '<strong>Data Sc. and Business Analytics</strong>' +
            '<li><a href="https://docs.google.com/document/d/1QmqPQVjTAlLL18nZBU5Mx7lqh0yF1jnvQKJXOWSct30/edit">https://docs.google.com/document/d/1QmqPQVjTAlLL18nZBU5Mx7lqh0yF1jnvQKJXOWSct30/edit</a></li>' +
            '<strong>Content Development</strong>' +
            '<li><a href="https://docs.google.com/document/d/1dPWPAf9DrWwegukrgRBhgII_2W3it0tciWlBy2etGec/edit">https://docs.google.com/document/d/1dPWPAf9DrWwegukrgRBhgII_2W3it0tciWlBy2etGec/edit</a></li>' +
            '<strong>Campus Ambassador</strong>' +
            '<li><a href="https://docs.google.com/document/d/1lxUIRSaYf-ATS3EhfeMkLciUXMTyRD1gmIu8mWiram4/edit">https://docs.google.com/document/d/1lxUIRSaYf-ATS3EhfeMkLciUXMTyRD1gmIu8mWiram4/edit</a></li>' +
            '<strong>Digital Marketing</strong>' +
            '<li><a href="https://docs.google.com/document/d/1ptZ0II8Ned904C2vxvfv7A2VZcqYH8fU84uPvNYAebM/edit">https://docs.google.com/document/d/1ptZ0II8Ned904C2vxvfv7A2VZcqYH8fU84uPvNYAebM/edit</a></li>' +
            '<strong>Talent Acquisition</strong>' +
            '<li><a href="https://docs.google.com/document/d/18GvNuiZXI_rRlvSDlWXM6fFclnbkSN4tegV36mIKErM/edit">https://docs.google.com/document/d/18GvNuiZXI_rRlvSDlWXM6fFclnbkSN4tegV36mIKErM/edit</a></li>' +
            '<strong>IOT and Computer Vision</strong>' +
            '<li><a href="https://docs.google.com/document/d/1aOIDcNi7PXBgPwl8E0RGS_s2unemS5ZWx8-clzrksGI/edit">https://docs.google.com/document/d/1aOIDcNi7PXBgPwl8E0RGS_s2unemS5ZWx8-clzrksGI/edit</a></li></ul> </p>'
        }
      });
    } else if(name === 'Join TSF Network') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: '',
          color:'#FAA99C',
          heading: name,
          text: '<p><ul>' +
            '<li>Join our discussion forum - The Sparks Foundation Network group on LinkedIn</li> ' +
            '<li>Send a joining request to the group using this link:' +
            '<a href="https://www.linkedin.com/groups/10379184/">https://www.linkedin.com/groups/10379184/</a></li> ' +
            '<li>It may take upto 2 to 3 days to approve your request</li> ' +
            '<li>This group is used for important announcements from our team, post task related queries from interns and query resolution from mentors</li>' +
            '<li>If you do not have a linkedIn profile, Please create one. One of your tasks will be improving your personal brand online</li>' +
            '</ul></p>'
        }
      });
    } else if(name === 'Share your Preferred Internship Experience') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: '',
          color:'#37A9DD',
          heading: name,
          text: '<p><ul>' +
            '<li>Open Interest Form : GRIP@TSF to select your domain</li> ' +
            '<li>Send a joining request to the group using this link:</li>' +
            '<a href="https://docs.google.com/forms/d/e/1FAIpQLScTmzfiKkbfS2yjmabn3XczfaEVYnw4xgO5NfThPebxZnlc8Q/viewform?entry.941892130=LF06">https://docs.google.com/forms/d/e/1FAIpQLScTmzfiKkbfS2yjmabn3XczfaEVYnw4xgO5NfThPebxZnlc8Q/viewform?entry.941892130=LF06</a></li> ' +
            '<li>The option you select in <strong>Preferred Internship Function</strong> will be printed on your GRIP Selection certificate</li> ' +
            '<li></li>' +
            '</ul></p>'
        }
      });
    } else if(name === 'Wait for GRIP Selection Certificate') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: '',
          color:'#B0D85B',
          heading: name,
          text: '<p><ul> ' +
            '<li>GRIP selection certificates are sent in the last week of each month after evaluating your profile</li> ' +
            '<li>You must complete steps 3 & 4 to get selection Certificate, even if you are selected on a job portal like intershala</li> ' +
            '<li>Read the FAQs to understand GRIPs timeline and structure: <a href="https://docs.google.com/document/d/1EUo3Vly4C9ym6OW8tjJsbMzJUnBoFXwuSh-Pit9vNso/edit">https://docs.google.com/document/d/1EUo3Vly4C9ym6OW8tjJsbMzJUnBoFXwuSh-Pit9vNso/edit</a></li> ' +
            '<li>All announcements will be made in TSF Network as mentioned in Step 2</li> ' +
            '<li>There may be no communication or acknowledgement email from our end between your application and us sending you a selection certificate.</li>' +
            '</ul></p>'
        }
      });

    } else if(name === 'Step Completion Checklist') {
      this.dialog.open(SchoolDialog,{
        hasBackdrop: true,
        width:'750px',
        data: {
          date: '',
          color:'#FAA99C',
          heading: name,
          text: '<p>By now, you should have completed these:</p> ' +
            '<p><ul> ' +
            '<p><ul><li>Join TSF Network group on LinkedIn</li></ul></p>' +
            '<p><ul><li>Filled the interests Form: GRIP@TSF</li></ul></p>' +
            '<p><ul><li>Aware that GRIP Selection certificate will be sent by the last day of the month and your internship starts in the first week of the next month</li></ul></p> ' +
            '<li>Again for my credible info queries, please read the guidelines document and for GRIP related queries, refer to FAQs</li>' +
            '<li>If you have a question not covered in the above two documents or not answered in TSF Network, write us on the grip@thesparksfoundation.sg</li>' +
            '</ul></p>'
        }
      });
    }
    // else if(name === 'AL-KHAIR CAMPUS 6') {
    //   this.dialog.open(SchoolDialog,{
    //     hasBackdrop: true,
    //     width:'750px',
    //     data: {
    //       date: 'ESTABLISHED IN 2015',
    //       color:'#82a6b1',
    //       heading: name,
    //       text: '<p>Al-Khair Primary School (campus-VI) is located in Yaroo Goth, Karachi, and was inaugurated in 2015. It was composed of 500 students and 27 teachers, and its building comprised 16 classrooms. However, in 2017, we lost the lease to the premises and appealed to Thaakat Foundation for support. It is due to its timely aid that we are currently building a new facility for Campus-VI.</p>'
    //     }
    //   });
    // }
    // else if(name === 'AL-KHAIR CAMPUS 7') {
    //   this.dialog.open(SchoolDialog,{
    //     hasBackdrop: true,
    //     width:'750px',
    //     data: {
    //       date: 'ESTABLISHED IN 2017',
    //       color:'#3E5D7D',
    //       heading: name,
    //       text: '<p>Al-Khair Primary School (campus-VII) was established in 2017, and is made up of 5 classrooms, 100 students and 6 teachers.</p>'
    //     }
    //   });
    // }
    // else if(name === 'AL-KHAIR CAMPUS 8') {
    //   this.dialog.open(SchoolDialog,{
    //     hasBackdrop: true,
    //     width:'750px',
    //     data: {
    //       date: 'ESTABLISHED IN 2020',
    //       color:'#224469',
    //       heading: name,
    //       text: '<h2>lorem ipsum</h2><p>hjkdsjhljkhajhljhfdsjk</p>'
    //     }
    //   });
    // }
    else if(name === 'Create your profile on My Credible Info') {
      this.dialog.open(SchoolDialog,{
        width:'750px',
        data: {
          date: '',
          color:'#EDC67B',
          heading: name,
          text: '<p><ul>' +
            '<li>Open this link (<a href="https://mycredible.info/login">https://mycredible.info/</a>) create your profile and submit details' +
            'asked in different sections. The details here will be used to verify your background.</li> ' +
            '<li>Plese read this document while submitting the detail guidelines on my credible info <a href="https://docs.google.com/document/d/1ZtpKVgRwXo7B7MknA7YgxxZsQBqVJfdywE6oSmfKwmI/edit">https://docs.google.com/document/d/1ZtpKVgRwXo7B7MknA7YgxxZsQBqVJfdywE6oSmfKwmI/edit</a></li> ' +
            '<li>Please read FAQs for all doubts related to grip <a href="https://docs.google.com/document/d/1EUo3Vly4C9ym6OW8tjJsbMzJUnBoFXwuSh-Pit9vNso/edit">https://docs.google.com/document/d/1EUo3Vly4C9ym6OW8tjJsbMzJUnBoFXwuSh-Pit9vNso/edit</a></li> ' +
            '<li>Account related queries are covered in the guidelines document and GRIP related queries are covered in the FAQs document. If you still have any doubt, write in TSF network</li>' +
            '</ul></p>'
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
