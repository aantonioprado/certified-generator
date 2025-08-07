import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-item-certified',
  imports: [SecondaryButton],
  templateUrl: './item-certified.html',
  styleUrl: './item-certified.css'
})
export class ItemCertified {
  @Input() nameStudent: string = '';
  @Input() dateIssue: string = '';
  @Input() id: string = '';

  constructor(private router: Router) {}

  redirectCertificate() {
      this.router.navigate(['/certificados', this.id])
  }
}
