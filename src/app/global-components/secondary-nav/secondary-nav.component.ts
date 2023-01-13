import { Component } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faContactBook, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.css']
})
export class SecondaryNavComponent {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faContactBook = faContactBook;
  faMessage = faMessage;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
}
