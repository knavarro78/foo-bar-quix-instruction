import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {
  @Output()
  submitNumberOutput: EventEmitter<Number> = new EventEmitter<Number>();

  inputNumberForm = this.formBuilder.group({
    inputNumber: new FormControl(null, Validators.required),
  });


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }

  submitNumber(): void {
    const value: Number = this.inputNumberForm.value.inputNumber;
    if(value) {
      this.submitNumberOutput.emit(value);
    }
  }

}
