import { Component, OnInit } from '@angular/core';
import { <%= classify(name) %>Selectors } from '../store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: '<%= name %>-test-component',
  templateUrl: './ui.pug',
  styleUrls: ['./style.scss']
})
export class <%= classify(name) %>TestComponent implements OnInit {
  public value$: Observable<any>;

  constructor(private _selectors: <%= classify(name) %>Selectors) {
    /* EMPTY*/
  }

  ngOnInit() {
    this.value$ = this._selectors.getValue();
  }
}
