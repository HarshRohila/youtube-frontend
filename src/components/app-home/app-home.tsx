import { Component, h } from '@stencil/core';
import axios from 'axios'
import { defer, tap } from 'rxjs';

const BASE_URL = "https://pipedapi.tokhmi.xyz"

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  componentWillLoad() {
    defer(() => axios.get(`${BASE_URL}/search?q=kapil sharma show&filter=all`)).pipe(
      tap(console.log)
    ).subscribe(console.log)
  }

  render() {
    return (
      <div class="app-home">
        
      </div>
    );
  }
}
