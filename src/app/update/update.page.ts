import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestData } from 'models/test.dto';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  data: TestData = {
    num: 12,
    name: 'My Name',
    date: new Date().toISOString(), // current date and time
    bool: true,
  };

  constructor(
    private router: Router,
  ) { }

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

}
