
// Integer enum,
// This would be database-stored e.g. in a MongoDB document. 
export enum TestEnum {
    Option_1 = 1,
    Option_2 = 2,
    Option_3 = 3,
    Option_4 = 4,
    Option_5 = 5,
}

// Our Data Transfer Object (DTO)
// for working with, and transporting data to-and-from the REST API.
export class TestEnumData {
    myEnum: TestEnum; // = TestEnum.Option_1;
    num: number;
    name: string;
    date: Date;
    bool: boolean;
}

// Functions here behave as though they are extensions of the Enum,
// since the namespace matches.
// These are 'helper functions' to solve specific problems.
export namespace TestEnum {

    // Retrieves the string name of a specific enum value
    // We convert underscores to spaces for display
    export function getMyEnumName(e: TestEnum): string {
        return TestEnum[e].toString().replace('_', ' ');
    }

    // Retrieves the set of all Keys
    export function keys() {
        return Object.keys(TestEnum);
    }

}
