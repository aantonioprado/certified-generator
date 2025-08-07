import { Component, ElementRef, ViewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { certificateService } from '../../_services/certificate';
import { Certificate } from '../../interfaces/certificate';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class CertificateComponent {
  id: string | null = null;
  certificate: Certificate | undefined;

  @ViewChild('certifiedContainer') certificateElement! : ElementRef;

  constructor(private certificateService: certificateService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificate = this.certificateService.certificates.find(item => item.id === this.id);
    });
  }

  downlaodCertified() {
    if(this.certificate == undefined) return;

    html2canvas(this.certificateElement.nativeElement, { scale: 2 }).then(canvas => {
      let link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'certified-'+ this.certificate?.id +'.png';
      link.click();
    });
  }
}
