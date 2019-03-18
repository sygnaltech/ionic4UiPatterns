import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestEnumData, TestEnum, TestEnumInteger } from 'models/testEnum.dto';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.page.html',
  styleUrls: ['./validate.page.scss'],
})
export class ValidatePage implements OnInit {

  // Our data transfer object (DTO)
  // represents data that will typically be transferred
  // to/from an API or database.
  data: TestEnumData;

  // for access to the Enums, within this context,
  // needed for template access.
  public testEnum = TestEnum;
  public testEnumInt = TestEnumInteger;
  // get testEnum() { return TestEnum; }
  // get testEnumInteger() { return TestEnumInteger; }
//  get testEnumString() { return TestEnumString; }

  // HACK: getters/setters which
  // 1. give me access to the object property
  // 2. convert it to/from a string, for the ion-select
  // get getTestEnum(): string {
  //   return this.data.en.toString();
  // }
  // set getTestEnum(u: string) {
  //   this.data.en = +u;
  // }

  // get getTestEnumInteger(): string {
  //   return this.data.enInt.toString();
  // }
  // set getTestEnumInteger(u: string) {
  //   this.data.enInt = +u;
  // }

  // get getTestEnumString(): string {
  //   console.log(this.data.enStr.toString());
  //   return 'Option_2'; // this.data.enStr.toString();
  // }
  // set getTestEnumString(u: string) {
  //   this.data.enStr = <TestEnumString>u; // TestEnumString.keys()['Option_5']; // TestEnumString.Option_4; // TestEnumString[u];
  // }

  constructor(
    private router: Router,
  ) {

    // Initialize our data object
    // This occurs on the very first page setup only,
    // and occurs before data-binding, so we get no errors due to a null data object.
    this.initializeData();

  }

  ngOnInit() {
  }

  async showItem() {
    console.log('Data: ', this.data);
  }

  async updateItem() {

    // Save data
    console.log('Data saved: ', this.data);

    // await Toast.show({
    //   text: 'User added.'
    // });

    // Return to main page
    this.router.navigateByUrl('/');

  }

  initializeData() {

    // Create our data object
    this.data = new TestEnumData();

    // Set any initial values
    this.data.en = TestEnum.Option_3;
    this.data.enInt = TestEnumInteger.Option_4;
//    this.data.enStr = TestEnumString.Option_3;
    this.data.name = 'Test Name';
    this.data.num = 12;
    this.data.date = new Date().toISOString();
    this.data.bool = true;

  }

}
