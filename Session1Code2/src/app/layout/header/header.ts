import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) {}

  onSearch(query: string) {
    if (query.trim()) {
      console.log('Search query:', query);
      this.router.navigate(['/search'], { queryParams: { q: query.trim() } });
    }
  }
}
