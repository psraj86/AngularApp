import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  studentFormGroup:FormGroup;
  
  ngOnInit(): void {
    this.generateForm();
  }
  hobbiesData = [{name:'Circket',value:"Cricket"},{name:'Football',value:"Football"},{name:'Kabbaddi',value:"Kabbaddi"}];
  generateForm(){
    this.studentFormGroup = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      address: this.generateAddressFormGroup(),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    })
  }

  get aliases(): FormArray{
    return this.studentFormGroup.get('aliases') as FormArray;
  }

  addAliases(){
    this.aliases.push(this.fb.control(''));
  }
  generateAddressFormGroup(){
    return this.fb.group({
      street:[''],
      city: [''],
      state: [''],
      zip: ['']
    })
  }

  updateForm(){
    this.studentFormGroup.patchValue({
      firstName:"Peter",
      address:{
        city:"Delhi"
      }
    })
  }
  onSubmit(){

  }

}
