import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MAGIC_DEFAULT_VALUE_ACCESSOR, MagicDefaultValueAccessor, MagicFormControlNameDirective} from "./magic";

@NgModule({
    declarations: [
        AppComponent,
        MagicFormControlNameDirective,
        MagicDefaultValueAccessor
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    /*providers: [
        MAGIC_DEFAULT_VALUE_ACCESSOR
    ],*/
    bootstrap: [AppComponent]
})
export class AppModule {
}
