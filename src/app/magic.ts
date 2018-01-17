import {
    Directive,
    forwardRef,
    Input
} from "@angular/core";
import {
    DefaultValueAccessor,
    FormControlName,
    NG_VALUE_ACCESSOR, NgControl,

} from "@angular/forms";


export const MAGIC_DEFAULT_VALUE_ACCESSOR: any = {
    provide     : NG_VALUE_ACCESSOR,
    useExisting : forwardRef(() => MagicDefaultValueAccessor),
    multi       : true
};

@Directive({
    //selector: 'input[magic]:not([type=checkbox]):not([formControlName])',
    selector : 'input[magic]',
    host: {
        '(input)': '$any(this)._handleInput($event.target.value)',
        '(blur)': 'onTouched()',
        '(compositionstart)': '$any(this)._compositionStart()',
        '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
    },
    providers: [MAGIC_DEFAULT_VALUE_ACCESSOR],
    exportAs : 'magic1'
})
export class MagicDefaultValueAccessor extends DefaultValueAccessor{
}

export const controlNameBinding: any = {
    provide: NgControl,
    useExisting: forwardRef(() => FormControlName )
};


@Directive({
    selector: 'input[magic]',
    providers: [controlNameBinding],
    exportAs : 'magic'
})
export class MagicFormControlNameDirective extends FormControlName {
    @Input()
    set magic(val: string) {
        this.name = val;
    }
}