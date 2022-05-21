import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items2: string[][]=[['t1', 't2', 't3']]

  items: string[][] = [['20', '21', '23'], ['29', '28', '27']]

}
