import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    MenuBarComponent, 
    CardComponent
  ],
  providers: [ CardComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}