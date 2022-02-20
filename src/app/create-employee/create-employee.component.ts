import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  education: any[] = ['10th', '12th', 'B.E'];

  workexperience: any[] = [
      // { value: 'opt-1', viewValue: 'Fresher' },
      // { value: 'opt-2', viewValue: 'Experienced' }
      {value: 'Fresher'},
      {value: 'Experienced'}
   ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'phone': new FormControl('', [Validators.required, Validators.maxLength(20)]), 
      'email': new FormControl('', [Validators.required, Validators.email]),
      'gender': new FormControl('', [Validators.required]),
      'qualification': new FormControl('', [Validators.required]),
      'dob': new FormControl('', [Validators.required]),
      'experience': new FormControl('', [Validators.required]),
      'years': new FormControl({ value: "", disabled: true }, [Validators.required]),
      'terms': new FormControl('', [Validators.required])
    })
  }

  onSelectionChanged({ value }) {
    // console.log(value);
    if (value === 'Fresher') {
      this.addUserForm.get('years').disable();
    } else {
      this.addUserForm.get('years').enable();
    }
  }

  //function to the add picture button.

  // addFile(){

  // }

  createEmployee(){
    console.log(this.addUserForm.value);
    console.log(this.addUserForm.value.name);
    console.log(this.addUserForm.value.phone);
    console.log(this.addUserForm.value.email);
    console.log(this.addUserForm.value.gender);
    console.log(this.addUserForm.value.qualification);
    console.log(this.addUserForm.value.dob);
    console.log(this.addUserForm.value.experience);
    console.log(this.addUserForm.value.years);
    console.log(this.addUserForm.value.terms);
  }

}
