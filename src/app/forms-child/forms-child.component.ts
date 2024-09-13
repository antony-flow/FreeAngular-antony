import { Component, Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-forms-child',
  standalone: true,
  imports: [],
  templateUrl: './forms-child.component.html',
  styleUrl: './forms-child.component.css'
})
export class FormsChildComponent {
  @Input() comingfromparent = '';
  @Output() msgevent = new EventEmitter();
  HandleClick() {
    this.msgevent.emit("hello from child");
  }

}
