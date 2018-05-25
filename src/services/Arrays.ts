import { Injectable } from '@angular/core';
import has from 'lodash/has';

@Injectable()
export class ArraysService {

    constructor() { }

    public chunk<T>(array: Array<T>, size?: Number): Array<Array<T>> {
        if (size != null) {
            return has.chunk(array, size);
        } else {
            return has.chunk(array);
        }
    }

}
