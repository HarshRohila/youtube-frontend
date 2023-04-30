import { Observable, defer, map } from 'rxjs';
import axios from 'axios';

interface IYouTubeApi {
  getSuggestions(query: string): Observable<string[]>;
}

export const YouTubeApi = {
  getApi(): IYouTubeApi {
    return new PipedApi();
  },
};

class PipedApi implements IYouTubeApi {
  static baseUrl = 'https://pipedapi.tokhmi.xyz';

  getSuggestions(query: string): Observable<string[]> {
    //search?q=kapil sharma show&filter=all
    return defer(() => axios.get(`${PipedApi.baseUrl}/suggestions?query=${query}`)).pipe(map(response => response.data));
  }
}
