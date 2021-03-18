import {AfterViewInit, Component, ElementRef, Inject, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../pages/schools/schools.component";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Idara Al-Khair Welfare Society';
  today: number = Date.now();

  constructor(public dialog: MatDialog,private _elementRef : ElementRef ) {
  }


  ngOnInit() {
    AOS.init();
  }
   ngAfterViewInit() {
   }

  openNewsletterPopup() {
    this.dialog.open(NewsletterDialog, {
      width: '850px'
    })
  }
}

@Component({
  selector: 'newsletter-dialog',
  templateUrl: "./newsletter-dialog.html",
  styleUrls: ['./app.component.scss']
})
export class NewsletterDialog {

  newsletterForm = new FormGroup({
    email: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<NewsletterDialog>) {}

  onNoClick() {
    this.dialogRef.close()
  }

}
