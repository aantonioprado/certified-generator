import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './_components/navbar/navbar';
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificates } from './pages/certificates/certificates';

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, Certificates],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certified-generator');
}
