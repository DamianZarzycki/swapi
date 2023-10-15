import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-mode-selector',
  templateUrl: './game-mode-selector.component.html',
  styleUrls: ['./game-mode-selector.component.scss'],
})
export class GameModeSelectorComponent {
  constructor(private router: Router) {}

  singlePlayerClickHandler(): void {
    this.router.navigate(['/game-area']);
  }

  multiPlayerClickHandler(): void {
    // this.router.navigate(['/multi-player']);
  }
}
