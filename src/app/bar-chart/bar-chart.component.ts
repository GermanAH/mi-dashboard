import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public chart: any;

  constructor() {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['2023-01-01', '2023-01-02', '2023-01-03','2022-01-04',
								 '2023-01-05', '2023-01-06', '2022-01-07','2022-01-08', ], 
	      datasets: [
          {
            label: "Fallas",
            data: ['10','5', '2', '1', '0',
								 '20', '15', '5'],
            backgroundColor: 'red'
          },
          {
            label: "Correctas",
            data: ['90', '95', '98', '99', '100',
									 '80', '85', '95'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5,
        color:'white'
      }
      
    });
  }

}
