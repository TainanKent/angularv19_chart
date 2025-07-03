import { Component } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexYAxis,
  ApexPlotOptions,
  ApexFill,
  ApexGrid,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTooltip,
  ApexLegend,
  ApexStroke
} from "ng-apexcharts";

export type ChartBarOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  grid: ApexGrid
  tooltip :ApexTooltip
};

export type ChartLineOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  grid: ApexGrid;
  markers: ApexMarkers;
};

export type ChartPieOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  labels: any;
  responsive: ApexResponsive[];
  legend: ApexLegend;
};

export type ChartSemiOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  legend: ApexLegend;
  stroke: ApexStroke;
};

export type ChartRadarOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-apexcharts',
  imports: [NgApexchartsModule],
  templateUrl: './apexcharts.component.html',
  styleUrl: './apexcharts.component.css'
})
export class ApexchartsComponent {
  public chartOptions: ChartBarOptions;
  public chartLineOptions: ChartLineOptions;
  public chartPieOptions: ChartPieOptions;
  public chartSemiOptions: ChartSemiOptions;
  public chartRadarOptions: ChartRadarOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ],
        position: "top",
        labels: {
          style: {
            colors: '#fff',
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#fff',
          }
        }
      },
      fill: {
        type: "gradient",
        colors: ['#00C4FF'],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          colorStops: [
            {
              offset: 0,
              color: "#60A5FA",
              opacity: 1
            },
            {
              offset: 100,
              color: "#60A5FA",
              opacity: 0.4
            }
          ]
        }
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: true
          }
        },  
      },
      tooltip: {
        custom: function({series, seriesIndex, dataPointIndex, w}) {
          return `<div class="custom_box bg-black w-[200px]">
            <div class="header flex justify-center text-white px-2">Custom Header</div>
            <div class="content p-2 flex flex-col gap-2">
              <div class="data1 rounded-md bg-white px-2">${ series[seriesIndex][dataPointIndex] }</div>
              <div class="data1 rounded-md bg-white px-2">${ series[seriesIndex][dataPointIndex] }</div>
              <div class="data1 rounded-md bg-white px-2">${ series[seriesIndex][dataPointIndex] }</div>
            </div>
            </div>`
        }
      }
    };

    this.chartLineOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        },
        {
          name: "basic1",
          data: [200, 500, 350, 150, 400, 790, 500, 800, 1300, 1000]
        }
      ],
      chart: {
        type: "area",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ],
        position: "top",
        labels: {
          style: {
            colors: '#fff',
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#fff',
          }
        }
      },
      fill: {
        type: "gradient",
        colors: ['#1A73E8', '#B32824'],
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: true
          }
        },  
        yaxis: {
          lines: {
            show: false
          }
        },  
      },
      markers: {
        size: 5,
        hover: {
          size: 9
        }
      },
    };

    this.chartPieOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: "donut",
        height: 350
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      dataLabels: {
        enabled: true
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      legend: {
        labels: {
            colors: '#fff',
        },
      }
    };

    this.chartSemiOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 600,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      legend: {
        labels: {
            colors: '#fff',
        },
      },
      stroke: {
        width: 0
      }
    };

    this.chartRadarOptions = {
      series: [
        {
          name: "Series Blue",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "Series Green",
          data: [20, 30, 40, 80, 20, 80]
        },
        {
          name: "Series Orange",
          data: [44, 76, 78, 13, 43, 10]
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
      }
    };
  }
}
