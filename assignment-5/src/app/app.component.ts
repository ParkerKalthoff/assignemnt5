import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT } from './data/contact-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-5';
  CONTACT_LIST: Contact[] = CONTACT;
}
