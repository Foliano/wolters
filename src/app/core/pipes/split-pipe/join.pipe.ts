import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appJoin',
  standalone: true,
})
export class JoinPipe implements PipeTransform {

  transform(stringArr: string[], joinSymbol: string = ' | '): string {
    return stringArr.join(joinSymbol);
  }

}
