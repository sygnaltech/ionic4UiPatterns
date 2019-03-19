

# UPDATE Data Item, with FORMS VALIDATION

Here we are exploring 
[forms validation](https://angular.io/guide/form-validation).

Much of my initial exploration here is based on Josh Morony's article regarding
[advanced forms validation](https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/)
which was targeted at IONIC 2.



# Pattern Requirements

*All of the pattern requirements
[UPDATE + ENUMS pattern](/tabs/enums)
plus **forms validation**, specifically;*

+ The ability to detect invalid data on form submit, and abort the submission process.

+ The ability to display a general form-wide error, indicating that there is a data validation problem.

+ The ability to display a field-specific errors, to identify specific problems.

+ The ability to validate each field based on several criteria simultaneously, e.g. is the field required, what's the minimum and maximum length of text, the minimum and maximum value of a numeric field. 

And the following specific behavioral flow;

1. When the user enters the page, no errors are shown, even if validation would fail.

1. As the user edits fields, those individual fields they touch can display field-level error messages to guide the user.  As soon as those fields are resolved, the field-level error should disappear.

1. If the user attempts to submit the form, and it contains validation errors, every field with an error should display its error messages.  Also there should be a form-wide error message displayed so that the user knows to look for the specific errors. 





# Implementation Notes

Critically, there are two different types of 
[forms validation](https://angular.io/guide/form-validation)
in Angular;

+ [Reactive form validation](https://angular.io/guide/form-validation#reactive-form-validation)
+ [Template-driven validation](https://angular.io/guide/form-validation#template-driven-validation)

For this pattern, I've chosen **Reactive forms** approach,
which appears to provide 
[much richer capabilities](https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/)
for advanced model/view interaction.

**NOTE:** Technically, Reactive forms 
[appears to be incompatible](https://angular.io/api/forms/FormControlName#use-with-ngmodel)
with the `[(ngModel)]` data binding approach, in favor of a different approach, and we may need to change that approach for compatibility later.
Currently it is deprecated but still functioning.



## Setting up Forms Validation

### VALIDATE.MODULE.TS

In our `.module.ts`, we need to import Reactive;

```
import { ReactiveFormsModule } from '@angular/forms';
```

And specify it in our `@NgModule` `imports`;

```
@NgModule({
  imports: [
    ReactiveFormsModule,
    ...
  ],
  ...
})
```

### VALIDATE.PAGE.HTML Initial setup

In our template, we need to wrap our fields with a `<form>` component,
and specify the `formGroup` name, e.g.; 

```
<form [formGroup]="mainForm">
     ...
</form>
``` 

This will be referenced throughout, and serves to group validations together.

### VALIDATE.PAGE.TS

In our class file, we need to import the validator support;

```
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
```

And in our class constructor;

```
constructor(
  public formBuilder: FormBuilder,
) { ... }
```

We also need to create a field for the `FormGroup`
we referenced in our template;

```
public mainForm: FormGroup;
```

And another to track form submission attempts;

```
public submitAttempt: boolean;
```

On initializing the form, we setup our validation rules.
Multiple rules can be applied by using `Validators.compose()`.

```
this.mainForm = this.formBuilder.group({
  testEnumCtl: ['', Validators.required],
  testEnumIntCtl: ['', Validators.required],
  numCtl: ['', Validators.compose([
    Validators.min(10),
    Validators.max(20)
    ])],
  nameCtl: ['', Validators.compose([
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(15),
    Validators.pattern('[a-zA-Z ]*'),
    ])],
  dateCtl: [''], 
  boolCtl: ['', Validators.requiredTrue], 
});
```

### VALIDATE.PAGE.HTML 

For each control we want to validate, we specify a `formControlName`;

```
<ion-input formControlName="numCtl" type="number" [(ngModel)]="data.num"></ion-input>
```

That name must match our validator configuration above.

Error messages can be positioned after form fields, e.g.;

```
<ion-item *ngIf="isInvalid('numCtl')" style="color: var(--ion-color-danger);">
    <p>Please enter a valid number, between 10 and 20, or leave blank.</p>
</ion-item>
```

Using `*ngIf`, we detect whether that error applies, and we can display any content we want.





## Form wide error message

Handling the form-wide error is simple.
We use `*ngIf` to determine if a submit was attempted, and if validation errors were found;

```
<p *ngIf="!this.mainForm.valid && submitAttempt" style="color: red;">Please fill out all details accurately.</p>
```


## Field-specific error messages

Morony's article suggests that in earlier versions of IONIC / Angular,
it was necessary to apply a style programmatically to a field to indicate its validation state.

Morony did this using `[class.invalid]`,
e.g.;

```
<ion-input formControlName="numCtl" type="number" [(ngModel)]="data.num"
  [class.invalid]="!numCtl.valid && (numCtl.dirty || this.submitAttempt)"
  ></ion-input>
```

This appears to be no longer the case in IONIC 4 / Angular 7.
Removing the `[class.invalid]` construction allows Angular's default styling ( red underline ) to work automatically.

```
<ion-input formControlName="numCtl" type="number" [(ngModel)]="data.num"></ion-input>
```

Also note the `isInvalid()` function I've added in the class.
It takes two values- 

1. The name of the field to test validity on
2. (optional) The type of error to check for.
This is defined by the validators, and 

  + `required` - the required validator has errored
  + `pattern` - the regex pattern validator has errored
  + `minlength` - the minimum length validator has errored
  + `maxlength` - the maximum length validator has errored

Here's an example of the function in use with `*ngIf`;

```
<ion-item *ngIf="isInvalid('nameCtl', 'required')" style="color: var(--ion-color-danger);">
    <p>Name is required.</p>
</ion-item>
```

This item will only appear if the `nameCtl` field fails the required validation test.





# Key things Learned

+ Use the browser's dev tools to see the object content on submit.

+ Forms validation is pretty powerful and comprehensive out-of-the-box.
It has enough validators to handle most common validation scenarios, such as required fields, bounded values, data length requirements, and even pattern-matching requirements such as emails, URLs and phone numbers. 

+ It's also possible to do custom validations.

+ Dates, in particular, do not offer much built-in validation options, 
e.g. "Date must be > 1 week from today".
However this can be done directly on `<ion-datetime>` 
or handled through the change event.

+ In general, empty fields do not cause validators like the minimum-length, or minimum-value validations to fail. You must use the required validator as well if you want to enforce this.









