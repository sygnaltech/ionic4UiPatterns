


# Databinding, Templates, and ENUMS

Here we are exploring **templates**, **2-way databinding** and **enums**,
in isolation from our other CRUD pattern requirements.

[Learn about TypeScript enums](https://www.typescriptlang.org/docs/handbook/enums.html)

## Pattern Requirements

+ Using an `enum`, either;

    + un-valued enums.
When enums are not assigned a value directly, TypeScript assigns integer values starting with `0`.

    + numeric enums.
Enums in which we have explicitly assigned a numeric value to each.

    + ~~string enums~~.
Currently we've avoided string-valued enums.

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

To accomplish this, we create a **pipe** to process our `enum` into useable data.

See `enum-keys.pipe.ts` for implementation details.

In particular note;

+ We are creating an array from the `enum`, with three parts. 
Note that the names are somewhat confusing;

    + `key` - the integer key, e.g. `1`
    + `value` - the value, which is the textual enum name, e.g. `Option_1`
    + `name` - our friendly name, used for display purposes, e.g. `Option 1`

+ The inclusion of the `@NgModule()` and exported `SharedModule` class.  
Apparently, an `@NgModule()` is essential in order to "own" our pipe, and to make it importable into other modules and components.

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


## Understanding `@NgModule()`

+ Anything referenced in `imports` **must** be itself a module.

For example, this is a module;

```
@NgModule({
  declarations: [ EnumKeysPipe ],
  exports: [ EnumKeysPipe ]
})
export class SharedModule {}
```

*Because* it uses the `@NgModule` decorator. 

Things that exist within that module can be declared
by placing them in `declarations`.

Things you want to be accessible to consumers of the module can be
made available my referencing them in `exports`.

In the above code, we declare and export our custom pipe called `EnumKeysPipe`. 

To then use our custom pipe in a Page (which is itself a module),
We need to edit that page's `.module.ts` file, import our custom-pipe module,
and also reference it in `imports`. 

```
import { SharedModule } from '../enum-keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClientModule }),
    SharedModule
  ],
  declarations: [
    Enums1Page,
  ],
  exports: [
  ]
})
export class Enums1PageModule {}
```

Key points regarding `@NgModule()`;

+ Referencing a class in `imports`, which is **not** itself declared as an `@NgModule()` will error.

+ Referencing a class in `declarations` in more than one class will error. 

+ Declaring (`declarations`) and exporting (`exports`) is how you create libraries. 