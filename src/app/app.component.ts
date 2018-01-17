import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MagicFormControlNameDirective} from "./magic";

@Component({
    selector: 'app-root',
    template: `
    <div>
        <form [formGroup]="myForm">
            name : <input type="text" magic="name" #name="magic" #i><br>
            email: <input type="text" magic="email"><br>
            <button (click)="setValue(i.value)">Set value</button>
        </form>
        <hr>
        <pre>
            #name =  {{ name.value | json}}
            <hr>
            {{ myForm.value | json }}
        </pre>
    </div>
    
  `})
export class AppComponent implements AfterViewInit{
    ngAfterViewInit(): void {
        this.magicD.valueAccessor.registerOnChange(()=>{
            console.log(`<<<<<<<<<<<>>>>>>>>>>>>>`);
        });
        this.magicD._setUpControl();
    }

    @ViewChild('name',{read:MagicFormControlNameDirective}) magicD;

    myForm = new FormGroup({
        name: new FormControl('eyal'),
        email: new FormControl('eyal@eee.com')
    });

    setValue(msg:string){
        this.magicD.control.setValue(msg);
        //this.magicD.valueAccessor._handleInput('XXXXXXXXXXX');
    }

    constructor(){
        this.myForm
            .valueChanges
            .subscribe((value)=>{
                let f = this.myForm;
                let n = this.myForm.controls.name;
                let e = this.myForm.controls.email;
                //this.magicD.control.setValue('eeeeeeeeeee');
                console.log(`>>>>>>>>> ${this.magicD.control === this.myForm.controls.name}`);
               // debugger;
        });
    }
}
