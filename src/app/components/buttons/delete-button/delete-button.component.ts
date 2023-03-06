import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteButtonComponent {}
