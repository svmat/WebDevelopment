export class Request {
  timestamp: string;
  searchText: string;

  constructor(timestamp: string, searchText: string) {
    this.timestamp = timestamp;
    this.searchText = searchText;
  }
}
