import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent {

  constructor(){}

  handleClick = () => window.location.href = 'https://wa.me/5551985508302?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20psicoterapia%20online.%20';
}
