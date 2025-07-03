import { Routes } from '@angular/router';
import { ApexchartsComponent } from './pages/apexcharts/apexcharts.component';
import { PlotlychartsComponent } from './pages/plotlycharts/plotlycharts.component';
import { UnovischartsComponent } from './pages/unovischarts/unovischarts.component';
import { ChartsComponent } from './pages/charts/charts.component';

export const routes: Routes = [
  { path: '', component: ApexchartsComponent },
  { path: 'apexcharts', component: ApexchartsComponent },
  { path: 'plotlycharts', component: PlotlychartsComponent },
  { path: 'unovischarts', component: UnovischartsComponent },
  { path: 'charts', component: ChartsComponent },
];
