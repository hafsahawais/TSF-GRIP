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
  address = "R-510/15 Federal B Area, Karachi";
  phone2 = "+92 300 299 2469";
  phone = "+92 300 211 2609";
  email = "\tinfo@idaraalkhair.com" + "\nidaraalkhair@hotmail.com";
  website = " idaraalkhair.com";

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
