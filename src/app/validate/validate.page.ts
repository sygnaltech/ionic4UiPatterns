import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Custom data objects
import { TestEnumData, TestEnum, TestEnumInteger } from 'models/testEnum.dto';

// Form validation
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  public formBuilder: FormBuilder;

  public mainForm: FormGroup;

  // Indicates whether a submit has been attempted
  public submitAttempt: boolean;

  constructor(
    private router: Router,
    public formBuilder1: FormBuilder,
  ) {

    // This feels weird. Necessary?
    this.formBuilder = formBuilder1;

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

    console.log('Validating form...');

    // Register that a submit has been attempted
    // and therefore we should display any validation errors
    this.submitAttempt = true;

    // If data is not valid, abort
    if (!this.mainForm.valid) {
      console.log('... data is NOT VALID');
      return;
    }

    console.log('... data VALID');

    // Save data
    console.log('Data saved: ', this.data);

    // await Toast.show({
    //   text: 'User added.'
    // });

    // Return to main page
    this.router.navigateByUrl('/');

  }

  reset() {

    console.log('Resetting...');

    location.reload();

  }

  validate() {

    console.log('Validating form...');

    // Register that a submit has been attempted
    // and therefore we should display any validation errors
    this.submitAttempt = true;

    // If data is not valid, abort
    if (!this.mainForm.valid) {
      console.log('... data is NOT VALID');
      return;
    }

    console.log('... data VALID');

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

    // Initialize the validation rules
    this.mainForm = this.formBuilder.group({
      testEnumCtl: ['', Validators.required],
      testEnumIntCtl: ['', Validators.required],
      numCtl: ['', Validators.required],
      nameCtl: ['', Validators.required],
      dateCtl: [''], // , Validators.required],
      boolCtl: [''], // , Validators.required],
    });

    // Reset submit attempt
    this.submitAttempt = false;

  }

}
