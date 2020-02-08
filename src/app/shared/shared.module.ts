import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

const reexportedModules: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const declarations: any[] = [];

@NgModule({
  imports: [
    ...reexportedModules,
  ],
  declarations: [
    ...declarations,
  ],
  exports: [
    ...reexportedModules,
    ...declarations,
  ],
})
export class SharedModule {}
