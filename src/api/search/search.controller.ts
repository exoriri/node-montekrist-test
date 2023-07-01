import { Controller, Get, Query } from '@nestjs/common';
import { SearchService, REQUESTS_TYPES } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get('?')
  async findAll(
    @Query('text') text: string,
    @Query('types') types?: string,
    @Query('page') page?: number,
  ) {
    const queryTypes = types ? types.split(',') : REQUESTS_TYPES;
    const response = await this.searchService.findAll(text, queryTypes, page);
    return response;
  }
}
