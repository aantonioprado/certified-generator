import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertified } from '../../_components/item-certified/item-certified';

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButton, ItemCertified],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {

}
