import {  NgModule} from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule}  from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
    imports: [

         ReactiveFormsModule,
         MatDividerModule,
         MatListModule,
         MatProgressSpinnerModule,
         MatToolbarModule,
         MatIconModule,
         MatRippleModule

    ],
    exports: [

         ReactiveFormsModule,
         MatDividerModule,
         MatListModule,
         MatProgressSpinnerModule,
         MatToolbarModule,
         MatIconModule,
         MatRippleModule
    ],
    providers: [
    ]
})
export class MaterialModule {

    }




