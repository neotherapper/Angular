import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Person } from '../shared/models';

@Component({
  selector: 'app-edit-person',
  templateUrl: 'edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})

export class EditPersonComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public person: Person
  ) { }

  ngOnInit() { }

  cancel(): void {
    console.log('%ccanceling', 'color:brown' );
  }

}
