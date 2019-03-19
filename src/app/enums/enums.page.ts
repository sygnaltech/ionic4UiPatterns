import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestEnumData, TestEnum, TestEnumInteger } from 'models/testEnum.dto';

@Component({
  selector: 'app-enums',
  templateUrl: './enums.page.html',
  styleUrls: ['./enums.page.scss'],
})
export class EnumsPage implements OnInit {

  // Our data transfer object (DTO)
  // represents data that will typically be transferred
  // to/from an API or database.
  data: TestEnumData;

  // for access to the Enums, within this context,
  // needed for template access.
  public testEnum = TestEnum;
  public testEnumInt = TestEnumInteger;

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
