import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme: 'primeone-light' | 'primeone-dark' = 'primeone-light';

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'primeone-light' ? 'primeone-dark' : 'primeone-light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    return this.currentTheme;
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
