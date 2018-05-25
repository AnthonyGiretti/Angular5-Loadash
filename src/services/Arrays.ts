import * as _ from 'lodash';

import { Injectable } from '@angular/core';

@Injectable()
export class ArraysService {

    constructor() { }

    /**
     * Creates an array of elements split into groups the length of size. 
     * If array can't be split evenly, the final chunk will be the remaining elements.
     * @param array
     * @param size
     */
    public chunk<T>(array: Array<T>, size?: Number): Array<Array<T>> {
        if (size != null) {
            return _.chunk(array, size);
        } else {
            return _.chunk(array);
        }
    }

    /**
     * Creates an array with all falsey values removed. 
     * The values false, null, 0, "", undefined, and NaN are falsey.
     * @param array
     */
    public compact(array: Array<any>): Array<any> {
        return _.compact(array);
    }

}
