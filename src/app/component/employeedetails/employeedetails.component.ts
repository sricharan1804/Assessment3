import { Component, OnInit } from '@angular/core';
import { Employee } from  '../.././interface/employee';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  employees$ : Employee[] = [
    {
      name: "Employee One",
      age: 40,
      email: "one@gmail.com",
      departments: ["Computer", "Physics"],
    },
    {
      name: "Employee Two",
      age: 10,
      email: "Two@gmail.com",
      departments: ["Computer"],
    },
    {
      name: "Employee Three",
      age: 10,
      email: "Three@gmail.com",
      departments: ["Physics", "Chemistry"],
    },
    {
      name: "Employee Four",
      age: 60,
      email: "Four@gmail.com",
      departments: ["Chemistry", "Physics"],
    },
    {
      name: "Employee Five",
      age: 70,
      email: "Five@gmail.com",
      departments: ["Computer", "Physics", "Chemistry"],
    },
    {
      name: "Employee Six",
      age: 70,
      email: "Six@gmail.com",
      departments: ["Computer", "Physics"],
    }
  ];

  name__email = '';
  isAsec__isDesc: boolean = false;
  sortByFields: string = '';
  filterByDepartments: string = '';

  constructor() {
  }

  ngOnInit() {
    this.sortBy('name')
  }

  // For filtering the employees$ by departments
  sortByFilter(prop){
    this.filterByDepartments = prop;
    let a = this.employees$.map(e => e.departments)
    let b = a.filter(k => k.find(s => s == prop))
    // console.log(a)
    // console.log(b)
  }

  // For sorting the employees$(name, age, email) in ascending and       descending order
  sortBy(property) {
    this.isAsec__isDesc = !this.isAsec__isDesc;
    this.sortByFields = property;
    let direction = this.isAsec__isDesc ? 1 : -1;
    this.employees$.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };



  // For reset and reloading the data to default
  resertandreload(){
    if(confirm('Are you sure you want to reset and reload the data ?')) {
      setTimeout(() => {
      window.location.reload()
      }, 1000);
      }
  }
}
