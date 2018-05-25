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

    /**
     * Creates a new array concatenating array with any additional arrays and/or values.
     * @param array
     * @param values
     */
    public concat<T>(array: Array<T>, ...values: Array<T>): Array<T> {
        return _.concat(array, ...values);
    }

    /**
     * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
     * The order and references of result values are determined by the first array.
     */
    public difference<T>(array: Array<T>, ...values: Array<Array<T>>): Array<T> {
        return _.difference(array, ...values);
    }

    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which they're compared.
     * The order and references of result values are determined by the first array.
     * The iteratee is invoked with one argument:
     */
    public differenceBy<T>(delegate: Function | String, array: Array<T>, ...values: Array<Array<T>>): Array<T> {
        return _.differenceBy(array, ...values, delegate);
    }
}
