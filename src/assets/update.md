


# UPDATE Data Item

## Pattern Requirements

+ Uses a simple `class` to store page data. Typically this would be used with a REST API for CRUD operations.

+ Support basic data types, including;

    + `string`
    + `number`
    + `date`
    + `boolean`

+ No *data validation*, however basic *data type* control by choosing which IONIC form control to use.

+ Simple, convenient binding to fields, e.g.;

```angular
<ion-input type="text" [(ngModel)]="data.name"></ion-input>
```

## Implementation Notes

+ Object fields are directly bound to `[(ngModel)]`

+ The type of data stored in the object is unchecked by the object. You can store a string in a number field. To preserve type, make sure to use the right UI component.

    + `ion-input type="text"` emits text
    + `ion-toggle` emits booleans
    + `ion-datetime` emits datetimes as strings
    + `ion-input type="number"` emits numeric values

## Key things Learned

### Lifecycle

In an **update** pattern, our URLs will most likely contain our object ID, e.g.;

```
/update/4723984721398
```

This means that the page loaded and stored on the *stack* will be object-specific,
Unlike our **create** pattern, which has a single shared `/create` URLs.



## Key things Learned

+ Use the browser's dev tools to see the object content on submit.

+ It does not appear to matter what kind data is entered, in the object it all appears as strings.

+ This means the object itself provides no type checking, and this must be done at e.g. the Mongoose layer.

+ The type of data stored in the object is unchecked by the object. You can store a string in a number field. To preserve type, make sure to use the right UI component

+ IONIC-4 uses strings to store dates.

+ `ion-datepicker` defaults to showing only the date in display and picker, however if the date data has a time component, it is still preserved, even across edits.

