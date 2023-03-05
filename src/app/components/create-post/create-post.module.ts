import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '../buttons/buttons.module';
import { CreatePostComponent } from './create-post.component';

@NgModule({
  declarations: [CreatePostComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonsModule, RouterModule],
  exports: [CreatePostComponent],
})
export class CreatePostModule {}
