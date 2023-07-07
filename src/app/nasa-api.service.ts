import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private apiKey = 'Fbc6i3XjnJIJcmQSZzwaMfojz9A5DIgQXJBbIIZE'; // Replace with your actual API key from NASA

  constructor(private http: HttpClient) {}

  getAstronomyPictureOfTheDay() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

    return this.http.get(url);
  }
}