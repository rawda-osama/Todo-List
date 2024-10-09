import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  taskArray = [{ taskName: 'Brush Teeth'}];

  onDelete(index: number) {
     console.log(index);
     this.taskArray.splice(index, 1);
  }
}
