import { Component, OnInit } from '@angular/core';

import { ArraysService } from '../services/Arrays';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _arraysService: ArraysService) {}

  public ngOnInit() {
    console.log('chunk sample :');
    console.log(this._arraysService.chunk(['Apple', 'Banana', 'Grapefruit']));

    console.log('chunk sample :');
    console.log(this._arraysService.chunk(['Apple', 'Banana', 'Grapefruit'], 2));

  }

}
