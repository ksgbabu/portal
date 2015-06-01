import {computedFrom} from 'aurelia-framework';

export class Welcome{
  heading = 'Welcome to the Portal Manager Application ';

}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
