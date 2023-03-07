import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '../buttons/buttons.module';
import { FormPostComponent } from './form-post.component';

@NgModule({
  declarations: [FormPostComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonsModule, RouterModule],
  exports: [FormPostComponent],
})
export class FormPostModule {}
