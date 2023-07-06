export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

export interface Directors extends Teacher {
	numberOfReports: number;
}

export interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

export interface StudentClass {
	workOnHomework(): string;
	displayName(): string;
}

export interface StudentClassInterface {
	new (firstName: string, lastName: string): StudentClass;
}

export class StudentClass implements StudentClass {
	constructor(public firstName: string, public lastName: string) {}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}
