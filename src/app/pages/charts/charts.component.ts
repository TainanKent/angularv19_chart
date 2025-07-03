import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-charts',
  imports: [BaseChartDirective],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      y: {
        position: 'left',
        ticks: {
          color: '#fff',
        }
      },
      x: {
        ticks: {
          color: '#fff',
        }
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#fff', // 圓餅圖的文字顏色
        },
      }
    },
    indexAxis: 'y',
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {data: [65, 59, 80, 81, 56, 55, 45], label: 'Series A', borderRadius: 10},
      {data: [20, 70, 50, 90, 10, 30, 10], label: 'Series B', borderRadius: 10}
    ]
  };

  private newLabel? = 'New label';

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Series C',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
        ticks: {
          color: '#fff',
        }
      },
      x: {
        ticks: {
          color: '#fff',
        }
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      }
    },
    plugins: {
      legend: { 
        display: true,
        labels: {
          color: '#fff', // 圓餅圖的文字顏色
        },
      },
    },
  };

  public lineChartType: ChartType = 'line';

  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false, // 讓圓餅圖不受容器大小影響
    plugins: {
      legend: {
        labels: {
          color: '#fff', // 圓餅圖的文字顏色
        },
      }
    }
  }

  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100], circumference: 180, rotation:270 }
    ],
  };

  public doughnutOptions1: ChartConfiguration['options'] = {
    maintainAspectRatio: false, // 讓圓餅圖不受容器大小影響
    plugins: {
      legend: {
        labels: {
          color: '#fff', // 圓餅圖的文字顏色
        },
      }
    }
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        labels: {
          color: '#fff', // 圓餅圖的文字顏色
        },
      }
    },
    scales: {
      r: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      }
    }
  };
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
    ],
  };
  public radarChartType: ChartType = 'radar';
}
