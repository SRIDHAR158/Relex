import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  phone: number;
  email: string;
  gender: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {phone: 9523808933, name: 'Naveen', email: 'naveen@gmail.com', gender: 'Male'},
  {phone: 9513807933, name: 'Krishna', email: 'krishna@ymail.com', gender: 'Male'},
  {phone: 8105776597, name: 'Priya', email: 'priya@orkut.com', gender: 'Female'},
  {phone: 9740144790, name: 'Deepthi', email: 'deepthi@ymail.com', gender: 'Female'},
  {phone: 8543654143, name: 'Suresh', email: 'suresh@gmail.com', gender: 'Male'},
  {phone: 9276492345, name: 'Ramesh', email: 'ramesh@ymail.com', gender: 'Male'},
  {phone: 9315780234, name: 'Kavya', email: 'kavya@orkut.com', gender: 'Female'},
  {phone: 8419345678, name: 'Swapna', email: 'swapna@ymail.com', gender: 'Female'},
  {phone: 9534678276, name: 'John', email: 'john@orkut.com', gender: 'Male'},
  {phone: 8234567843, name: 'Anushka', email: 'anushka@gmail.com', gender: 'Female'},
 
];

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'phone', 'email', 'gender'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  create(){
       this.router.navigate(['/add employee']);
  }

}
