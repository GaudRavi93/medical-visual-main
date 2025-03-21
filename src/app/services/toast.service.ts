import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})

export class ToastService {
    constructor(
        public _snackBar: MatSnackBar
    ){}

    /** show toast for success message */
    showSuccessToast(message: string): void {
        this._snackBar.open(message, '✖', {
            duration: 2000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'success-style'
        });
    }

    /** show toast for error message */
    showErrorToast(message: string): void {
        this._snackBar.open(message, '✖', {
            duration: 2000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'error-style'
        });
    }

    /** show toast for warning message */
    showWarningToast(message: string): void {
        this._snackBar.open(message, '✖', {
            duration: 500,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'warning-style'
        });
    }

    /** show toast for info message */
    showInfoToast(message: string): void {
        this._snackBar.open(message, '✖', {
            duration: 500,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'info-style'
        });
    }
}
