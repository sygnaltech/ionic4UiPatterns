import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { TestEnumData, TestEnum, TestEnumInteger } from 'models/testEnum.dto';
// import { PipeTransform, Pipe } from '@angular/core';
// import { EnumKeysPipe } from '../enum-keys.pipe';
//import { EnumKeysPipe } from '../enum-keys.pipe';

export enum FooEnum {
  Option_1,
  Option_2,
  Option_3,
  Option_4,
  Option_5,
}

export namespace FooEnum {

  // Retrieves the string name of a specific enum value
  // We convert underscores to spaces for display
  export function getName(e: FooEnum): string {
      return FooEnum[e].toString().replace('_', ' ');
  }

  // Retrieves the set of all Keys
  export function keys() {
      return Object.keys(FooEnum);
  }

}




@Component({
  selector: 'app-enums1',
  templateUrl: './enums1.page.html',
  styleUrls: ['./enums1.page.scss'],
})
export class Enums1Page implements OnInit {

  //foo = 'Option_5'; // FooEnum.Option_5;

  dataVal: FooEnum;

  // for access to the Enums, within this context,
  // needed for template access?
  get fooEnum() { return FooEnum; }

  constructor(
    private router: Router,
//    private enumKeys: EnumKeysPipe
  ) {
  }

  ngOnInit() {
  }

  async showItem() {
    console.log('Data: ', this.dataVal);
  }

  async updateItem() {

    // Save data
    console.log('Data saved: ', this.dataVal);

    // await Toast.show({
    //   text: 'User added.'
    // });

    // Return to main page
    this.router.navigateByUrl('/');

  }

  initializeData() {

    // Set any initial values
    this.dataVal = FooEnum.Option_5;

  }

}
