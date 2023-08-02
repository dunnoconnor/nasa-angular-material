import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewComponent } from './image-view.component';
import { MaterialModule } from '../material/material.module';

describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ImageViewComponent]
    });
    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display the image src and alt', () => {
    //set the src and alt for an image
    const imgSRC = "https://apod.nasa.gov/apod/image/2307/WaterfallAurora_Letelier_960.jpg";
    const imgAlt = "Aurora over Icelandic Waterfall";
    component.imageSrc = imgSRC;
    component.imageAlt = imgAlt;

    fixture.detectChanges();
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toBe(imgSRC);
    expect(imgElement.alt).toBe(imgAlt);
  })

  it('should correctly display the image description', () => {
    //set the description text
    const imgDescription = "It seemed like the sky exploded. The original idea was to photograph an aurora over a waterfall. After waiting for hours under opaque clouds, though, hope was running out. Others left. Then, unexpectedly, the clouds moved away. Suddenly, particles from a large solar magnetic storm were visible impacting the Earth's upper atmosphere with full effect. The night sky filled with colors and motion in a thrilling auroral display.  Struggling to steady the camera from high Earthly winds, the 34 exposures that compose the featured image were taken.  The resulting featured composite image shows the photogenic Godafoss (Goðafoss) waterfall in northern Iceland in front of a very active aurora in late February. The solar surface explosion that expelled the energetic particles occurred a few days before.  Our Sun is showing an impressive amount of surface activity as it approaches solar maximum, indicating that more impressive auroras are likely to appear in Earth's northern and southern sky over the next few years.";
    component.imageDescription = imgDescription;
    //trigger component change detection
    fixture.detectChanges();
    const pElement : HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(pElement.textContent).toBe(imgDescription);
  })
});
