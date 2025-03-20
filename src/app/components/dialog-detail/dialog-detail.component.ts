import { Component,inject,EventEmitter, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog-detail',
  imports: [MatButtonModule],
  templateUrl: './dialog-detail.component.html',
  styleUrl: './dialog-detail.component.css'
})
export class DialogDetailComponent {
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit(); // Emit event to close the dialog
  }
}
