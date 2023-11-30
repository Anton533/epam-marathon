import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'epm-chips',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './epm-chips.component.html',
  styleUrls: ['./epm-chips.component.scss']
})
export class EpmChipsComponent {
  @Input() chips!: string;
  @Input() isEditable = false;
  @Input() isActive = false;

  @Output() editChipsStatus: EventEmitter<string> = new EventEmitter<string>();

  onIsEditableClick(): void {
    if (this.isEditable) {
      this.editChipsStatus.emit();
    }
  }

  get iconName() {
    return '/assets/icons/' + this.chips.toLowerCase() + '.svg';
  }

  get iconFileName() {
    if (this.isActive) return '/assets/icons/close.svg';
    else return '/assets/icons/plus.svg';
  }
}
