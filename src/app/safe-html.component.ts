import { Pipe } from '@angular/core'
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

@Pipe({name: 'safeHtml'})
export class Safe {
    constructor(private sanitizer:DomSanitizer){}

    transform(style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    }
}