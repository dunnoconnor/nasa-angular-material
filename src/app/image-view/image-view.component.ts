import { Component } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent {
  imageOfTheDay: any;

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit() {
    this.nasaApiService.getAstronomyPictureOfTheDay().subscribe(
      (data: any) => {
        this.imageOfTheDay = data;
      },
      (error: any) => {
        console.log('An error occurred:', error);
      }
    );
  }
}
