import { Injectable } from '@angular/core';
import { chunk } from 'lodash';

@Injectable()
export class ArraysService {

    constructor() { }

    public chunk<T>(array: Array<T>, size?: Number): Array<Array<T>> {
        if (size != null) {
            return chunk(array, size);
        } else {
            return chunk(array);
        }
    }

}
