import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  heading= "Donate";
  text = "Title of Account: Idara Al-Khair Welfare Society\<br>" +
    "A/C NO: 0101018353\n" +
    "Branch Code: 0133\n<br>" +
    "Bank Name: Meezan Bank Pvt. Ltd.\n<br>" +
    "Swift Code: MEZNPKKA\n<br>" +
    "IBAN: PK85MEZN0001330101018353"+
    "<hr>"+
    "Title of Account: Idara Al-Khair Welfare Society\n<br>" +
    "A/C NO: 10008429\n<br>" +
    "Branch Code: 0055\n<br>" +
    "Bank Name: MCB\n<br>" +
    "Swift Code: MUCBPKKA\n<br>" +
    "IBAN: PK87MUCB0005501010008429<br>";
  constructor() { }

  ngOnInit() {
  }

}
