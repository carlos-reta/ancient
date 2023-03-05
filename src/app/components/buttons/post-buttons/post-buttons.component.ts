import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-buttons',
  templateUrl: './post-buttons.component.html',
  styleUrls: ['./post-buttons.component.css']
})
export class PostButtonsComponent {
  @Output() deleteClick!: EventEmitter<boolean>;
  @Output() updateClick!: EventEmitter<boolean>;
}
