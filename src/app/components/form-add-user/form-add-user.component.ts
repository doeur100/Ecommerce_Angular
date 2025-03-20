import { Component,inject,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-add-user',
  imports: [],
  templateUrl: './form-add-user.component.html',
  styleUrl: './form-add-user.component.css'
})
export class FormAddUserComponent {
   @Output() close = new EventEmitter<void>();
  
    closeDialog() {
      this.close.emit(); // Emit event to close the dialog
    }
}
