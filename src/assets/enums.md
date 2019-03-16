


# UPDATE Data Item, with ENUMS

## Pattern Requirements

*All of the pattern requirements
[UPDATE pattern](/tabs/update)
plus;*

+ Ability to support `enum` fields in our bound object.

+ Ability to list possible enum values from the user to choose from.

## Implementation Notes

*See the 
[UPDATE pattern](/tabs/update)
for additional implementation notes.*

+ For our purposes, we are using an enum which contains numeric values. It should be possible to handle other enum configurations as well.

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

+ Creating the list of enumeration options has challenges as well.  

```
<ion-select-option *ngFor="let t of testEnum.keys();" value="{{ t }}">{{ testEnum.getName(t) }}</ion-select-option>
```



## Key things Learned

+ Use the browser's dev tools to see the object content on submit.


