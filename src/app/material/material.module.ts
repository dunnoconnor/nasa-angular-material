import { NgModule } from "@angular/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";

const MaterialComponents = [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
]

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents],
})

export class MaterialModule {};