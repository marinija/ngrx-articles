import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  set(key: string, data: unknown): void {
    try {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(key, JSON.stringify(data));
      }
    } catch (e) {
      console.error('Error saving to local storage ', e);
    }
  }

  get(key: string): unknown {
    try {
      if (isPlatformBrowser(this.platformId)) {
        const localStorageItem = localStorage.getItem(key);
        return localStorageItem ? JSON.parse(localStorageItem) : null;
      }
      return null
    } catch (e) {
      console.error('Error getting from local storage ', e);
      return null;
    }
  }
}
