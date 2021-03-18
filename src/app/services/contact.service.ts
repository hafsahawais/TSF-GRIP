import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  sendEmail(name, email,subject, message) {
    const uri = 'http://localhost:3000/contact/send';
    const obj = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    return this.http.post(uri, obj);
  }
  sendVolunteerRegisteration(name, email,phone, message) {
    const uri = 'http://localhost:3000/sendVolunteer';
    const obj = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    return this.http.post(uri, obj);
  }
}
