
# UPDATE Data Item, with DATA VALIDATION

Here we are exploring **forms validation**.

[Learn about TypeScript enums](https://www.typescriptlang.org/docs/handbook/enums.html)
Much of my initial exploration here is based on Josh Morony's article regarding
[advanced forms validation](https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/)


## Pattern Requirements

*All of the pattern requirements
[UPDATE + ENUMS pattern](/tabs/enums)
plus **forms validation**, specifically;*

+ The ability to detect invalid data on form submit, and abort the submission process.

+ The ability to display a general error, indicating that there is a data validation problem.

+ The ability to display a field-specific errors, to identify specific problems.

+ The ability to validate each field based on several criteria simultaneously, e.g. is the field required, what's the minimum and maximum length of text, the minimum and maximum value of a numeric field. 

And the following specific behavioral flow;

+ When the user enters the page, no errors are shown, even if validation would fail

+ As the user edits fields, those individual fields they touch can display field-level error messages to guide the user.  As soon as those fields are resolved, the field-level error should disappear.

+ If the user attempts to submit the form, and it contains validation errors, every field with an error should display its error messages.  Also there should be a form-wide error message displayed so that the user knows to look for the specific errors. 





## Implementation Notes

IONIC's Reactive forms contains form validation capabilities.

Technically, this is incompatible with `[(ngModel)]` data binding approach,
and we may need to change that approach for Reactive forms later.
Currently it is deprecated but still functioning.


### Setting up Forms Validation

In the template, we need to wrap our fields with a `<form>` component,
and specify the `formGroup` name; 

```
<form [formGroup]="mainForm">
     ...
</form>
``` 

This will be referenced throroughout, and serves to group validations together.

In our class file;




Logic 

```
submitAttempt
```




Note here that the control group

```
!this.mainForm.valid
```

```
mainForm.controls.testEnumCtl.dirty
```

`.valid`
`.dirty`
`.touched`



### Form wide error message

Handling the form-wide error is simple.
We use `*ngIf` to determine if a submit was attempted, and if validation errors were found;

```
<p *ngIf="!this.mainForm.valid && submitAttempt" style="color: red;">Please fill out all details accurately.</p>
```


Field-specific error message 


This does not appear to be necessary, for basic error styling ( red underline )

validFrom.invalid && (validFrom.dirty || validFrom.touched

validFrom.errors['required']

```
[class.invalid]="validateCtl('numCtl')"
```

Validation rules we're testing;

Enum

### Configuring Forms Validation

There are a number of validators already available; 

+ required
+ minimum length string
  + Only applies when there is at least one character
  + if zero characters is invalid, use the required validator as well
+ maximum length string
+ string patterns (regex)
+ minimum value numeric
  + Only applies when there is at least one character
  + if a blank value is invalid, use the required validator as well
+ maximum value numeric
+ boolean TRUE








<ion-select formControlName="testEnumCtl" [(ngModel)]="data.getTestEnum"
  [class.invalid]="!mainForm.controls.testEnumCtl.valid && (mainForm.controls.testEnumCtl.dirty || submitAttempt)"
  > 




EVERY item you apply a `formControlName` to must be specified


```
<form [formGroup]="mainForm">
```




```
[class.invalid]="!mainForm.controls.testEnumCtl.valid && (mainForm.controls.testEnumCtl.dirty || submitAttempt)"
```




















### Displaying Error Messages

+ For our purposes, we are working with enum which contains numeric values. It should be possible to handle other enum configurations as well.

+ String-based enums were found to be problematic.  Since this isn't a common use case, we'll revisit this later.





## Key things Learned

+ Use the browser's dev tools to see the object content on submit.

+ Forms validation is pretty powerful and comprehensive out-of-the-box.

+ It's possible to do custom validations.

+ Dates, in particular, do not offer much built-in validation options, 
e.g. "Date must be > 1 week from today".
However this can be done directly on `<ion-datetime>` 
or handled through the change event.









