import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Feedback} from './feedback';
import { ContactService } from '../../services/contact.service';
// import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  address = " THE HANGAR, NUS ENTERPRISE\n" +
    "21 HENG MUI KENG TERRACE, SINGAPORE, 119613";
  phone2 = " +65-8402-8590";
  phone = " +65-8402-8590";
  email = " info@thesparksfoundation.sg";
  website = "https://thesparksfoundationsingapore.org";

  constructor(private fb: FormBuilder,
              private ContactService: ContactService,
              // private flashMessages: FlashMessagesService
              ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      subject:  ['', Validators.required],
      message:  ['', Validators.required]
    });
  }
  // onSubmit()
  // {
  //   this.feedback = this.feedbackForm.value;
  //   console.log(this.feedback);
  //   this.feedbackForm.reset();
  // }
  sendMail(name, email, subject, message) {
    if (this.feedbackForm.valid) {
        this.ContactService.sendEmail(name, email, subject, message).subscribe(success => {
        // this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
        console.log('email sent',success);
      }, error => {
        console.log(error)
        // this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      });
    }
  }
}
