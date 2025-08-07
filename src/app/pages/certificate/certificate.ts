import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { certificateService } from '../../_services/certificate';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class CertificateComponent {
  id: string | null = null;
  certificate: Certificate | undefined;

  constructor(private certificateService: certificateService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificate = this.certificateService.certificates.find(item => item.id === this.id);
    });
  }
}
