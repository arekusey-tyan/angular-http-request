import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTTP-Client';

  constructor(private http: HttpClient) {
  }

  onSearchFilm(props: {t: string, y: number, plot: number}) {
    console.log(props)
    this.http.get<any>(`http://www.omdbapi.com/?apikey=19e82d4&t=${props.t}${props.y ? `&${props.y}` : ''}${props.plot ? `&${props.plot}` : ''}`).subscribe(data => {
      let response = document.querySelector('.response')
      let el = `
<div class='title'>Title: ${data.Title}</div>
<div class='year'>Year: ${data.Year}</div>
<div class="rating">Rating: <div>${data.Ratings[0].Source}: ${data.Ratings[0].Value}</div></div>
<div class='title'>Runtime: ${data.Runtime}</div>
<div class='year'>Director: ${data.Director}</div>
<div class='year'>Actors: ${data.Actors}</div>
<div class="plot">Plot: ${data.Plot}</div>
<div><img src="${data.Poster}" /></div>
`
      response?.insertAdjacentHTML('afterbegin', el)
    })
  }
}
