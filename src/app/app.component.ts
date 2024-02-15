import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '@shared/components/top-bar/top-bar.component';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
      this.store.dispatch(authActions.getCurrentUser())
  }
}
