import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-item-certified',
  imports: [SecondaryButton],
  templateUrl: './item-certified.html',
  styleUrl: './item-certified.css'
})
export class ItemCertified {
  id: string = "6";

  constructor(private router: Router) {}

  redirectCertificate() {
      this.router.navigate(['/certificados', 2])
  }
}
