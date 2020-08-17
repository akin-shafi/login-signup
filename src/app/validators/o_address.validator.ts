import { FormControl } from '@angular/forms';

export class OAddressValidator {

  static validAddress(fc: FormControl){

    if(fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc"){
      return {
        validAddress: true
      };
    } else {
      return null;
    }
  }
}
