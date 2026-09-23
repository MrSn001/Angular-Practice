import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_PRODUCTS } from '../../data/mock-products';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-search-result',
  imports: [ProductCard, RouterLink],
  templateUrl: './SearchResult.html',
  styleUrl: './SearchResult.css',
})
export class SearchResult {
  // Binds the 'q' query parameter directly to this signal
  q = input<string>('');

  // Computed signals that automatically update when 'q' changes
  searchQuery = computed(() => this.q() || '');
  
  filteredProducts = computed(() => {
    const queryLower = this.searchQuery().toLowerCase();
    if (!queryLower) return [];
    
    return MOCK_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(queryLower) || 
      p.description.toLowerCase().includes(queryLower)
    );
  });
}
