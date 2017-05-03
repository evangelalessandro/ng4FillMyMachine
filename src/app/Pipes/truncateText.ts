import { Pipe, PipeTransform } from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'truncateText'
})
    
export class truncateTextPipe implements PipeTransform {

    // Transform is the new "return function(value, args)" in Angular 1.x
    transform(value: string, lengthField: string): string {
        // ES6 array destructuring

        let length = parseInt(lengthField);
        if (value) {
            if (value.length > length) {
                return value.substring(0, length - 3) + "..."
            }
            else {
                return value;
            }
        }
        return value;
    }

}

