import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestData } from 'models/test.dto';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  data: TestData;

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

  async createItem() {

    console.log('createItem: ', this.data);

    // Save data
    // TODO: persist this to an API or database

    // Notify user
    // await Toast.show({
    //   text: 'User added.'
    // });

    // Reset our create data object,
    // so it's ready for the next create
    this.initializeData();

    // Return to main page
    this.router.navigateByUrl('/');

  }

  // ionViewWillEnter() {

  //   // Occurs on every re-entry into this page,
  //   // e.g. user navigates away and then returns to the page

  //   console.log('ionViewWillEnter (enter): ', this.data);

  //   // In our scenario, we want the data to clear again.
  //   this.initializeData();

  //   console.log('ionViewWillEnter (leave): ', this.data);

  // }

  ionViewWillLeave() {

    // Occurs every navigation away from this page.

    console.log('ionViewWillLeave (enter): ', this.data);

    // In our scenario, we want the data to clear again.
    this.initializeData();

    console.log('ionViewWillLeave (leave): ', this.data);

  }

  initializeData() {

    console.log('initializeData (enter): ', this.data);

    // Create our data object
    this.data = new TestData();

    // Set any initial values
    this.data.date = new Date().toISOString();

    console.log('initializeData (leave): ', this.data);

  }

}
