import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.css']
})
export class InterestedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];

  // listData!: MatTableDataSource<any>
  // displayedColumns: string[] = ['options', 'DepartmentID', 'DepartmentName']


  ngOnInit(): void {
  }

  printRow(row: any){
    console.log(row)
  }


  openDialog(){
    let dialogRef = this.dialog.open(DialogComponent, {data: {name: 'moo'}})
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

}
