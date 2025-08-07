import { Component, OnInit } from '@angular/core';
import { ItemCertified } from '../../_components/item-certified/item-certified';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';
import { certificateService } from '../../_services/certificate';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertified, SecondaryButton, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates implements OnInit {
  certificates: Certificate[] = [];
  constructor(private certificateService: certificateService){}

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates;
  }
}
