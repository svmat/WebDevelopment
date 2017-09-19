export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  // domain() is a utility function that extracts domain from URL
  domain(): string {
    try {
      // aka. http://link/to/article
      const domainAndPath: string = this.link.split('//')[1];
      // aka foo.com/link/to/article
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
