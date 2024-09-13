import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { FormsChildComponent } from '../forms-child/forms-child.component';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-forms-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormsChildComponent],
  templateUrl: './forms-page.component.html',
  styleUrl: './forms-page.component.css',
  providers: [HeroService],
})
export class FormsPageComponent {
  // Userform = new FormGroup({
  //   name: new FormControl('',Validators.required),
  //   age: new FormControl('',Validators.min(18)),
  // })
 

  Userform: FormGroup;
  constructor(private heroservice: HeroService,private formBuilder: FormBuilder) {
    this.Userform = this.formBuilder.group({
      name: ['', Validators.required],
      age: [''],
      aliases: this.formBuilder.array([this.formBuilder.control('')]),
    });
  }
  onSubmit() {
    console.log(this.Userform.value);
  }
  UpdateformValue() {
    this.Userform.patchValue({
      name: this.Userform.value.name,
      age: this.Userform.value.age,
    });
  }

  parentproperty: string = 'hello from parent, my child';
 

  ngOnInit(): void {
    // console.log(this.inputfield1);
    console.log(this.heroservice.getBestActionHero());
  }
  HandleChildChnage(msg: string) {
    alert('you clicked a button in a child component');
    console.log(msg);
  }
}
