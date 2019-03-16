
// Our Data Transfer Object (DTO)
// for working with, and transporting data to-and-from the REST API.
export class TestData {
    num: number;
    name: string;
    // IONIC uses strings for dates
    // https://ionicframework.com/docs/api/datetime#datetime-data
    date: string; // Date
    bool: boolean;
}
