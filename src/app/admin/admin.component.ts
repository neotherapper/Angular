import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models';
import { MatTableDataSource } from '@angular/material';

const people: Person[] = [
  new Person('Mitko Mitkoff', 3, 10, 1980),
  new Person('Mr Pattel', 2, 10, 1994),
  new Person('Goergi Georgiev', 2, 4, 2002),
  new Person('Ivo Ivanoff', 2, 3, 1999),
  new Person('Todor Todoroff', 2, 11, 1994),
  new Person('Test user 1', 23, 10, 1968),
  new Person('Sefan Stefanov', 14, 12, 1952),
  new Person('Spass S Spassoff', 29, 11, 1964),
  new Person('Ivan Ivanov', 19, 11, 1915),
  new Person('Mr Daniel S', 29, 2, 1976),
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['name', 'dateOfBirth', 'edit'];
  // displayedColumns: ['name', 'dateOfBirth', 'edit'];
  people: Person[];

  dataSource = new MatTableDataSource<Person>(people);

  constructor() {
  }

  ngOnInit() {
  }

  editProfile(row) {
    console.log('edit profile', row);
  }

}
