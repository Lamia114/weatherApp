import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  

  private apiKey = 'de2672cd7105875c5c6254863aadde0d';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  

    constructor(private http: HttpClient) {}
  
    getWeatherData(city: string) {
      const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
      return this.http.get(url);
    }
}