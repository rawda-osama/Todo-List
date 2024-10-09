import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  taskArray = [{ taskName: 'Brush Teeth'}];

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value
    })
  }

}
