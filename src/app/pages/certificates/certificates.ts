import { Component } from '@angular/core';
import { ItemCertified } from '../../_components/item-certified/item-certified';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertified, SecondaryButton, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {

}
