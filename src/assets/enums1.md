


# Databinding, Templates, and ENUMS

## Pattern Requirements

*Here we are exploring templates, 2-way databinding and enums,
in isolation from our other CRUD pattern requirements.*

+ Using an `enum`, either;

    + untyped enums (implicitly valued)
    + numeric (explicitly valued)
    + currently we've avoided string-valued enums

+ Ability to extract the list of keys and values from the enum, and data-bind it to an `ion-select` for user selection.

+ 2-way databinding of the selected `enum` value.

## Implementation Notes

+ For our purposes, we are working with enum which contains numeric values. It should be possible to handle other enum configurations as well.

+ String-based enums were found to be problematic.

### Data-Binding our object's enum property

+ It does not appear possible to bind `[(ngModel)]` to the object property directly, although it's unclear why this is.  Instead we provide a get/set method in the page class, which provides access to our object property, and we bind to that;

```
data: TestEnumData; 

get getTestEnum(): string {
    return this.data.en.toString();
}
set getTestEnum(u: string) {
    this.data.en = +u;
}
```

```
<ion-select [(ngModel)]="getTestEnum"> 
</ion-select>
```

### Creating our Enumerated Options List

Retrieving and creating our list of `<ion-select-option>` elements appears to require some helper functions- particularly for accessing the enum type's keys, and transposing those to names. 

To accomplish this, we add some functionality directly into our class definition file, in the form of exported functions.

The namespace `TestEnum` matches the name of our `enum`, so these functions behave much like *extension functions* in C#.

```
export namespace TestEnum {

    // Retrieves the string name of a specific enum value
    // We convert underscores to spaces for display
    export function getName(e: TestEnum): string {
        return TestEnum[e].toString().replace('_', ' ');
    }

    // Retrieves the set of all Keys
    export function keys() {
        return Object.keys(TestEnum);
    }

}
```





+ Creating the list of enumeration options has challenges as well.  

```
<ion-select-option 
    *ngFor="let t of testEnum.keys();" 
    value="{{ t }}">
    {{ testEnum.getName(t) }}
</ion-select-option>
```



## Key things Learned

+ Use the browser's dev tools to see the object content on submit.


