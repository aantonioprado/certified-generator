import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certified',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './item-certified.html',
  styleUrl: './item-certified.css'
})
export class ItemCertified {
  id: string = "6";
}
