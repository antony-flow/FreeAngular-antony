import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { NgFor, NgSwitch } from '@angular/common';
import { CommonModule, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    NgFor,
    NgSwitch,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgSwitchCase,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent {
  Mainform!: FormGroup;
  formControlTypes: { [key: string]: string } = {};
  options: { [key: string]: string[] } = {};

  inputType: string[] = ['text', 'email', 'number', 'checkbox', 'radio'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.Mainform = this.formBuilder.group({
      Feedbackform: this.formBuilder.group({
        newoption: new FormControl(''),
      }),
      newFieldForm: this.formBuilder.group({
        selectedType: new FormControl(''),
        newFieldName: new FormControl(''),
      }),
    });
    this.addFormControl('name', 'text');
    this.addFormControl('email', 'email');
    this.addFormControl('age', 'number');
    // this.addFormControl('Gender', 'checkbox');
    // this.addFormControl('selectName', 'text');
    // this.addFormControl('selectType', 'text');
  }

  get Feedbackform(): FormGroup {
    return this.Mainform.get('Feedbackform') as FormGroup;
  }

  get newFieldForm(): FormGroup {
    return this.Mainform.get('newFieldForm') as FormGroup;
  }
  addFormControl(fieldName: string, fieldType: string) {
    this.Feedbackform.addControl(fieldName, new FormControl(''));
    this.formControlTypes[fieldName] = fieldType;
    if (fieldType === 'checkbox' || fieldType === 'radio') {
      this.options[fieldName] = [];
    }
  }

  getFormControl() {
    return Object.keys(this.Feedbackform.controls);
  }
  addNewField() {
    const formvalue = this.newFieldForm.value;
    const FieldName = formvalue.newFieldName;
    const typeofinput = formvalue.selectedType;
    this.addFormControl(FieldName, typeofinput);
    this.newFieldForm.reset({ fieldType: 'text' });
    // this.Feedbackform.patchValue({ selectName: '', selectType: '' });
  }

  addOption(fieldName: string) {
    const newOption = this.Feedbackform.get('newoption')?.value;
    if (newOption.trim() !== '') {
      this.options[fieldName].push(newOption.trim());
      this.Feedbackform.get('newoption')?.reset();
    }
  }

  OnSubmit() {
    console.log(this.Mainform.value);
  }
}
