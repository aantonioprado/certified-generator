import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './_components/navbar/navbar';
import { BaseUi } from './_components/base-ui/base-ui';
import { certificateService } from './_services/certificate';

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('certified-generator');

  constructor(private certificateService: certificateService) {}

  ngOnInit(): void {
    let certificates = localStorage.getItem('certificates');
    this.certificateService.certificates = certificates ? JSON.parse(certificates) : [];
  }
}
