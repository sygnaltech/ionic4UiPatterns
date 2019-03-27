
# IONIC 4 MVC Patterns

This project is a collection of basic CRUD design patterns, focused on interactions between the model, view, and controller.

It is intended to test & establish best practices, around the following design requirements;

+ Ability to integrate with a back-end datastore.
+ Use of a single object (DTO) for transporting the data and from to the API.
+ Use of that same DTO for data transport to the view, including two-way data-binding using `[(ngModel)]`.
    + Correct matching of datatypes to fields. 
    + Support for string, number, date, boolean, and enums
+ No errors on entry into the form, due to null data values.
+ Properly initialize the form as the user enters, leaves, and returns
    + Correctly initializing data for e.g. a new CREATE item operation
    + Resetting forms validation state.

In addition to the above CRUD foundation, we want the ability to support; 

+ Full form data validation, with field-level error messages and error styling.
+ Handling and two-way binding of ENUM field data from our DTO.
+ Support for Markdown in IONIC pages, for easier on-screen documentation.
