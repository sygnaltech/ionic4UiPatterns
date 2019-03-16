


# IONIC 4 UI Patterns

This project is a collection of basic UI patterns, intended to test & establish best practices.

## Database Create, Retrieve, Update and Delete ( CRUD ) UI Patterns

In all scenarios, we want;

+ Use of a single object (DTO) for transporting the data and from to the API.
+ Direct data-binding from the object properties, to form fields, using `[(ngModel)]`.
    + Correct matching of datatypes to fields. 
    + string, number, date, and boolean
+ No errors on entry into the form, due to null fields.
+ Properly initialize the form as the user enters, leaves, and returns
    + so that data is correctly initialized
    + and validation state is reset.

And the option to support; 

+ Full form data validation, with error messages and error styling.
+ Handling and binding of ENUM field data.

## CREATE new data item, for insertion in a back-end system

Here we specifically want a pattern 

**PATTERN**: [Create new data item](/tabs/create)

## UPDATE an existing data item, in a back-end system

**PATTERN**: [Update an existing data item](/tabs/update)

**PATTERN**: [Update an existing data item, with an enum field](/tabs/enums)

**PATTERN**: [Update an existing data item, with form validation](/tabs/validate)

# Additional Work

**PATTERN**: [Use of Markdown in IONIC pages](/tabs/markdown)

+ Use of Markdown in IONIC pages, for supporting on-screen documentation
