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

    console.log('compact sample :');
    console.log(this._arraysService.compact(['Apple', 0, 'Banana', '', 'Grapefruit']));

    console.log('concat sample :');
    console.log(this._arraysService.concat(['Apple', 'Banana'], 'Grapefruit', 'Lemon'));

    console.log('difference sample :');
    console.log(this._arraysService.difference(['Apple', 'Banana'], ['Grapefruit', 'Lemon', 'Banana']));

    console.log('differenceBy sample :');
    console.log(this._arraysService.differenceBy(Math.floor, [2.1, 1.2], [2.3, 3.4], [2.4, 3.1]));

    console.log('differenceBy sample :');
    console.log(this._arraysService.differenceBy('fruitName',
                                                [{'fruitName': 'Apple'}, {'fruitName': 'Banana'}, {'fruitName': 'Grapefruit'}],
                                                [{'fruitName': 'Banana'}]));

    console.log('differenceBy sample :');
    console.log(this._arraysService.differenceBy((x) => x.length,
                                                ['Apples', 'Banana', 'Grapefruit'],
                                                ['Banana']));

  }

}
