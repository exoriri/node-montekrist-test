import { Injectable } from '@nestjs/common';
import axios from 'axios';

const STARWARS_BASE_URL = 'https://swapi.dev/api';
export const REQUESTS_TYPES = ['people', 'planets', 'starships'];

const DEFAULT_RESPONSE_VALUE = {
  prev: null,
  next: null,
  found: null
}

const makeFoundStartWarsResponse = (res: { data: { previous: string | null, next: string | null, results: string[] } }) => (
  {
    prev: res.data.previous,
    next: res.data.next,
    found: res.data.results
  }
)

@Injectable()
export class SearchService {
  async findAll(searchText: string, types: Array<string>) {
    const requests = REQUESTS_TYPES.map(type => {
      if (types.includes(type)) {
        return axios.get(`${STARWARS_BASE_URL}/${type}?search=${searchText}`)
      } else {
        Promise.resolve();
      }
    });
    
    const [peopleResponse, planetsResponse, starshipsResponse] = await Promise.all(requests)
    const people = peopleResponse ? makeFoundStartWarsResponse(peopleResponse) : DEFAULT_RESPONSE_VALUE;
    const planets = planetsResponse ? makeFoundStartWarsResponse(planetsResponse) : DEFAULT_RESPONSE_VALUE;
    const starships = starshipsResponse ? makeFoundStartWarsResponse(starshipsResponse) : DEFAULT_RESPONSE_VALUE;

    return {
      people,
      planets,
      starships
    };
  }
}
