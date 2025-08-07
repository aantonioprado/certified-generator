import { Component, ViewChild } from '@angular/core';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';
import { certificateService } from '../../_services/certificate';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {
  constructor(private certificateService: certificateService, private route: Router) {}
  @ViewChild('form') form!: NgForm;

  certificate: Certificate = {
    id: "",
    name: "",
    activities: [],
    dateIssue: ""
  };
  activity: string = "";


  fieldEmpty(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValid() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0;
  }

  addActivity() {
    if(this.activity.length == 0) {
      return;
    }

    this.certificate.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.certificate.activities.splice(index, 1);
  }

  submit() {
    if(!this.formValid) return;

    this.certificate.id = uuidv4();
    this.certificate.dateIssue = this.getCurrentDate();
    this.certificateService.addCertificate(this.certificate);

    this.route.navigate(['certificados', this.certificate.id]);

    this.certificate = this.stateInitCertificate();
    this.form.resetForm();
  }

  getCurrentDate() {
    let date = new Date();
    let [day, month, year] = [
      String(date.getDate()).padStart(2, '0'),
      String(date.getMonth() + 1).padStart(2, '0'),
      date.getFullYear()
    ];
    return `${day}/${month}/${year}`;
  }

    stateInitCertificate(): Certificate {
      return {
        id: "",
        name: "",
        activities: [],
        dateIssue: ""
      };
    }
}
