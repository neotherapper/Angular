import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Person } from '../shared/models';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-person',
  templateUrl: 'edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})

export class EditPersonComponent implements OnInit {
  editPersonForm: FormGroup;
  years: number[];
  months: number[];
  days: number[];

  constructor(
    public dialogRef: MatDialogRef<EditPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public person: Person,
    private fb: FormBuilder
  ) {
    this.editPersonForm = this.fb.group({
      name: new FormControl('', [
        Validators.required
      ]),
      dayOfBirth: new FormControl('', [
        Validators.required
      ]),
      monthOfBirth: new FormControl('', [
        Validators.required
      ]),
      yearOfBirth: new FormControl('', [
        Validators.required
      ]),
    });
    this.years = this.createYearOptions();
    this.months = this.createMonthOptions();
    this.days = this.createDayOptions();
  }

  ngOnInit() {
    this.editPersonForm.patchValue(this.person);
    console.log('%cperson in modal ', 'color:red', this.person, );
  }

  cancel(): void {
    this.dialogRef.close();
  }

  editPerson(): void {
    console.log('%ceditPerson', 'color:brown', this.editPersonForm.value);
  }

  private createYearOptions(): number[] {
    const yearOptions = [];
    const thisYear = new Date().getFullYear();
    for (let index = -100; index < 0; index++) {
      yearOptions.push(thisYear + index);
    }
    return yearOptions;
  }

  private createMonthOptions(): number[] {
    const monthOptions = [];
    for (let index = 1; index < 13; index++) {
      monthOptions.push(index);
    }

    return monthOptions;
  }

  private createDayOptions(): number[] {
    const monthOptions = [];
    for (let index = 1; index < 32; index++) {
      monthOptions.push(index);
    }

    return monthOptions;
  }

}
