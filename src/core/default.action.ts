import { Action } from '@ngrx/store';

export const HTTP_ERROR = 'HTTP_ERROR';

export class HttpErrorAction implements Action {
    readonly type = HTTP_ERROR;
    constructor(public payload: any) {}
}