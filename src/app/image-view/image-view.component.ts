import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent {
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() imageDescription: string;
}
