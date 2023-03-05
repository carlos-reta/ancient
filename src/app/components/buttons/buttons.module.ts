import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';

@NgModule({
  declarations: [DeleteButtonComponent, PrimaryButtonComponent],
  imports: [CommonModule],
  exports: [DeleteButtonComponent, PrimaryButtonComponent],
})
export class ButtonsModule {}
