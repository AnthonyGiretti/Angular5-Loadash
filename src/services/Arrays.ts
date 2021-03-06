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

    /**
     * This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values.
     * The order and references of result values are determined by the first array.
     * The comparator is invoked with two arguments: (arrVal, othVal).
     * @param delegate
     * @param array
     * @param values
     */
    public differenceWith<T>(delegate: Function | String, array: Array<T>, ...values: Array<Array<T>>): Array<T> {
        return _.differenceWith(array, ...values, delegate);
    }

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     * @param array
     * @param n
     */
    public drop<T>(array: Array<T>, n?: Number): Array<T> {
        if (n > 0) {
            return _.drop(array, n);
        } else {
            return _.drop(array);
        }
    }

    /**
     * Creates a slice of array with n elements dropped from the end.
     * @param array
     * @param n
     */
    public dropRight<T>(array: Array<T>, n?: Number): Array<T> {
        if (n > 0) {
            return _.dropRight(array, n);
        } else {
            return _.dropRight(array);
        }
    }

    /**
     * Creates a slice of array excluding elements dropped from the end. 
     * Elements are dropped until predicate returns falsey. 
     * The delegate is invoked with three arguments: (value, index, array).
     * @param array
     * @param delegate
     */
    public dropRightWhile<T>(array: Array<T>, delegate: Function | object | Array<any> | String): Array<T> {
        return _.dropRightWhile(array, delegate);
    }
}
