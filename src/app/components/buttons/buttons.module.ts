import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { PostButtonsComponent } from './post-buttons/post-buttons.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';

@NgModule({
  declarations: [DeleteButtonComponent, PrimaryButtonComponent, PostButtonsComponent],
  imports: [CommonModule],
  exports: [PrimaryButtonComponent, PostButtonsComponent],
})
export class ButtonsModule {}
