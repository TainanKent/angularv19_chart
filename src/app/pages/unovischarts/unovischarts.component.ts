import { Component } from '@angular/core';
import { 
  VisXYContainerModule, 
  VisLineModule, 
  VisAxisModule, 
  VisAreaModule, 
  VisGroupedBarModule, 
  VisDonutModule,
  VisSingleContainerModule
} from '@unovis/angular'

type DataRecord = { x: number; y: number; y1?: number; y2?: number };
type ColorAccessor<T> = (data: T, index?: number) => string;

@Component({
  selector: 'app-unovischarts',
  imports: [VisXYContainerModule, VisLineModule, VisAxisModule, VisAreaModule, VisGroupedBarModule, VisDonutModule, VisSingleContainerModule],
  templateUrl: './unovischarts.component.html',
  styleUrl: './unovischarts.component.css'
})
export class UnovischartsComponent {
  x = (d: DataRecord): number => d.x
  y = (d: DataRecord): number => d.y
  data: DataRecord[] = [
    { x: 0, y: 0, y1: 5, y2: 8 },
    { x: 1, y: 2, y1: 7, y2: 5 },
    { x: 2, y: 1, y1: 9, y2: 2 },
  ]

  yArea = [
    (d: DataRecord) =>  d.y,
    (d: DataRecord) =>  d.y1,
    (d: DataRecord) =>  d.y2
  ]

  dataDount: number[] = [10, 20, 30, 40, 50];
  value = (d: number) =>  d

  color = (d: DataRecord[], i: number) =>  ['red', 'green', 'blue'][i]
}
