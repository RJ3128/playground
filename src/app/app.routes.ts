import { Routes } from '@angular/router';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { LottoNumbersComponent } from './public/lotto-numbers/lotto-numbers.component';
import { QuickListComponent } from './public/quick-list/quick-list.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lotto-numbers', component: LottoNumbersComponent },
  { path: 'quick-list', component: QuickListComponent },
];
