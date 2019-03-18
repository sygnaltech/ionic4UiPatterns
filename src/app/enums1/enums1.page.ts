import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestEnumData, TestEnum, TestEnumInteger } from 'models/testEnum.dto';

@Component({
  selector: 'app-enums1',
  templateUrl: './enums1.page.html',
  styleUrls: ['./enums1.page.scss'],
})
export class Enums1Page implements OnInit {

  // Our data object
  public data;

  // for access to the Enums, within this context,
  // needed for template access.
  public testEnum = TestEnum;
  public testEnumInt = TestEnumInteger;

  constructor(
    private router: Router,
  ) {
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

    // Initialize our data object
    this.data = new TestEnumData();
    this.data.en = TestEnum.Option_4;
    this.data.enInt = TestEnumInteger.Option_3;

  }

}
