import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrl: './addbutton.component.css'
})
export class AddbuttonComponent {

  taskArray = [{ taskName: 'Brush Teeth'}];

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value
    })
  }

}
