import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ){}

  transform(value: string, ...args: unknown[]): unknown {
    // DomSanitizer ayuda a prevenir los errores de seguridad de Cross Site Scripting (XSS)
    // al desinfectar los valores para que sean seguros de usar en los diferentes contextos DOM.
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}