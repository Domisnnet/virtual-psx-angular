import { Component } from '@angular/core';
import { MenuBarComponent } from '@components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    MenuBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}