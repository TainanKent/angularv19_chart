import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgApexchartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularv19_chart';
}
