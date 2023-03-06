import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButtonComponent {
  @Input() text!: string;
}
