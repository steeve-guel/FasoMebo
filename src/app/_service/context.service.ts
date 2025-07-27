import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(@Inject(PLATFORM_ID) private plateformId:Object) { }

  isBrowser():boolean {
    return isPlatformBrowser(this.plateformId);
  }

  isServer():boolean{
    return isPlatformServer(this.plateformId);
  }
}
