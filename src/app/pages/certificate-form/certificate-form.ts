import { Component } from '@angular/core';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {
  name: string = '';
  activity: string = '';
  activitys: string[] = [];

  fieldEmpty(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValid() {
    return this.activitys.length > 0 && this.name.length > 0;
  }

  addActivity() {
    this.activitys.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.activitys.splice(index, 1);
  }
}
