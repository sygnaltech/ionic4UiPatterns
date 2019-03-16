import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestEnumData, TestEnum } from 'models/testEnum.dto';

@Component({
  selector: 'app-enums',
  templateUrl: './enums.page.html',
  styleUrls: ['./enums.page.scss'],
})
export class EnumsPage implements OnInit {

  data: TestEnumData; // = new TestData();

  // data: TestData = {
  //   num: 12,
  //   name: 'My Name',
  //   date: new Date().toISOString(), // current date and time
  //   bool: true,
  // };

  // for access to the Enums, within this context,
  // needed for template access?
  get testEnum() { return TestEnum; }

  // HACK: getters/setters which
  // 1. give me access to the object property
  // 2. convert it to/from a string, for the ion-select
  get getTestEnum(): string {
    return this.data.en.toString();
  }
  set getTestEnum(u: string) {
    this.data.en = +u;
  }

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

  ionViewWillEnter() {

    // Occurs on every re-entry into this page,
    // e.g. user navigates away and then returns to the page

    console.log('ionViewWillEnter (enter): ', this.data);

    // In our scenario, we MIGHT want the data to re-load again.
    // or, we might want user changes to persist for awhile.

//    this.initializeData();

    console.log('ionViewWillEnter (leave): ', this.data);

  }

  initializeData() {

    console.log('initializeData (enter): ', this.data);

    // Create our data object
    this.data = new TestEnumData();

    // Set any initial values
    this.data.en = TestEnum.Option_1;
    this.data.name = 'Test Name';
    this.data.num = 12;
    this.data.date = new Date().toISOString();
    this.data.bool = true;

    console.log('initializeData (leave): ', this.data);

  }

}
