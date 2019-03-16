


# CREATE Data Item

## Pattern requirements

+ Uses a simple class to store page data. Typically this would be transported to an API for CRUD operations.
+ Object fields are directly bound to `[(ngModel)]`
+ NO data validation

Notes;

+ Use the browser's dev tools to see the object content on submit.
+ It does not appear to matter what kind data is entered, in the object it all appears as strings.
+ This means the object itself provides no type checking, and this must be done at e.g. the Mongoose layer.

## Implementation Notes

+ Our pattern requirement to reset the "new item" data, so that it's fresh whenever the user re-enters the page, can be handled in one of two ICONIC-4 
(lifecycle events)[https://blog.ionicframework.com/navigating-lifecycle-events/].

    + `ionViewWillEnter`

    + `ionViewWillLeave`. This appears to be the better choice, as it prevents flickering on re-entry, where the user sees old data momentarily. 

## Key things Learned

