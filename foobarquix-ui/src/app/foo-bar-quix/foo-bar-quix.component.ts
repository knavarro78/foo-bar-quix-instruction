import {Component, OnInit, OnDestroy} from '@angular/core';
import {FooBarQuixService} from '../foo-bar-quix.service';
import {subscribeToResult} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {

  results: string[] = [];

  constructor(private fooBarQuixService: FooBarQuixService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  convertNumber(inputNumber: number): void {
    this.fooBarQuixService.convert(inputNumber).subscribe(data => {
      if (data.result) {
        this.results.push(`${inputNumber} and the result is ${data.result}`);
      }
    })
  }

}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}
