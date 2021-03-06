
// Integer enum, with implicit values
// This would be database-stored e.g. in a MongoDB document.
export enum TestEnum {
    Option_1,
    Option_2,
    Option_3,
    Option_4,
    Option_5,
}

// Integer enum, with explicit values
// This would be database-stored e.g. in a MongoDB document.
export enum TestEnumInteger {
    Option_1 = 1,
    Option_2 = 2,
    Option_3 = 3,
    Option_4 = 4,
    Option_5 = 5,
}

// export enum TestEnumString {
//     Option_1 = 'Option 1',
//     Option_2 = 'Option 2',
//     Option_3 = 'Option 3',
//     Option_4 = 'Option 4',
//     Option_5 = 'Option 5',
// }

// Our Data Transfer Object (DTO)
// for working with, and transporting data to-and-from the REST API.
export class TestEnumData {

    en: TestEnum;
    enInt: TestEnumInteger;
//    enStr: TestEnumString;
    num: number;
    name: string;

    // IONIC uses strings for dates
    // https://ionicframework.com/docs/api/datetime#datetime-data
    date: string; // Date

    bool: boolean;

    // Provides string transformation for the enums,
    // which is needed for ion-select data-binding
    get getTestEnum(): string {
        return this.en.toString();
    }
    set getTestEnum(u: string) {
        this.en = +u;
    }

    // Provides string transformation for the enums,
    // which is needed for ion-select data-binding
    get getTestEnumInt(): string {
        return this.enInt.toString();
    }
    set getTestEnumInt(u: string) {
        this.enInt = +u;
    }

}

// Below was my original approach for providing ngModel databinding
// support for enums.  It has been deprecated in favor of the
// class property approach above.

// Functions here behave as though they are extensions of the Enum,
// since the namespace matches.
// These are 'helper functions' to solve specific problems.
// export namespace TestEnum {

//     // Retrieves the string name of a specific enum value
//     // We convert underscores to spaces for display
//     export function getName(e: TestEnum): string {
//         return TestEnum[e].toString().replace('_', ' ');
//     }

//     // Retrieves the set of all Keys
//     export function keys() {
//         return Object.keys(TestEnum);
//     }

// }
