import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalStateService } from '../../services/creacion-listas/servicios/modal-state.service';
import { CreatorRowsService } from 'src/app/services/creacion-listas/servicios/creator-rows.service';

@Component({
  selector: 'app-modal-add-rows',
  templateUrl: './modal-add-rows.component.html',
  styleUrls: ['./modal-add-rows.component.css', './form-modal.component.css']
})
export class ModalAddRowsComponent {

  constructor(public ms:ModalStateService, public crs:CreatorRowsService, private fb: FormBuilder) {}
  isConfirmLoading = false;

  nameValid?:String;
  rolValid?:String;

  validateForm: FormGroup<{
    name: FormControl<string | null>;
    rol: FormControl<'interesado' | 'asesor' | 'jurado' | 'director' | null>;
  }> = this.fb.group({
    name: this.fb.control<string | null>(null, Validators.required),
    rol: this.fb.control<'interesado' | 'asesor' | 'jurado' | 'director' | null>(null, Validators.required)
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      this.crs.addDataRow(this.nameValid!, this.rolValid!);      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  
  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.ms.isVisible = false;
      this.isConfirmLoading = false;
    }, 100);
  }

  handleCancel(): void {
    this.ms.isVisible = false;
  }

}
