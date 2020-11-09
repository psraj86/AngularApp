import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
const mModule: any[] = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
];
@NgModule({
  imports: [CommonModule, ...mModule],
  exports: [...mModule],
})
export class MaterialModule {}
