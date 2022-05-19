import { Component } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'html2pdf';
  name: string = 'big man';
  width: number = 300;
  myArray: any[];

  constructor() {
    this.myArray = [
      1, 2, 3, 4, 5, 1, 2, 3, 4, 5
    ]
  }
  async printQr() {
    console.log(this.name);
    // Choose the element that our invoice is rendered in.
    const element = document.getElementById("element-to-print");
    var opt = {
      margin: 1,
      filename: 'output.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 5 },
      width: 500,
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
  }
}
