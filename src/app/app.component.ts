import { Component, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';
import { CoreState } from './core/core.state';
import { SetDesktopUser } from './core/core.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'playground';

  protected desktopUser: Signal<boolean>;

  constructor(private store: Store) {
    this.getUserDevice();
    this.desktopUser = this.store.selectSignal(CoreState.isDesktopUser);
  }

  getUserDevice() {
    const userAgent: string = navigator.userAgent;

    if (/Chrome/i.test(userAgent)) {
      this.store.dispatch(new SetDesktopUser(true));
    }
  }
}
