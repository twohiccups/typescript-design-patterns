// CHAIN OF RESPONSIBILITY

import { UserCreateRequest } from "./request";

// Generic validator, that process any type of input
export abstract class Validator<T> {

    private next: Validator<T> | undefined;  // The next validator in the chain. The last validator doesn't have next.

    abstract validate(request: T): T;

    // Adds a new validator to the chain. Return the next validator for convenient chaining
    // In this example, chaining happens at the tail. Declare the head, and keep appending to it.
    setNext(next: Validator<T>): Validator<T> {
        this.next = next;
        return next;
    }

    // Processes the request, maybe transforms it, and passes the request to the next validator
    process(request: T): T {
        const result = this.validate(request);
        if (this.next) {
            return this.next.process(result);
        }
        // End of the chain
        return result;
    }
}

// This will help keep DRY principle for validators that process UserCreateRequests
export abstract class CreateUserValidator extends Validator<UserCreateRequest> { };

export class UserIdValidator extends CreateUserValidator {
    validate(request: UserCreateRequest): UserCreateRequest {
        const alphanumeric = /^[a-z0-9]+$/i;
        if (!alphanumeric.test(request.id)) {
            throw new Error("Id must be alphanumeric");
        }
        console.log('ID is OK');
        return request;
    }

}

export class UserNameValidator extends CreateUserValidator {
    validate(request: UserCreateRequest): UserCreateRequest {
        if (request.name.length < 1) {
            throw Error("Name cannot be empty");
        }
        console.log('Name is OK');
        return request;
    }
}

export class UserAgeValidator extends CreateUserValidator {
    private static readonly MAX_AGE = 18;

    validate(request: UserCreateRequest): UserCreateRequest {
        if (request.age < UserAgeValidator.MAX_AGE) {
            throw Error("User is too young.")
        }
        console.log('Age is OK');
        return request;
    }
}

// The processing logic in each of the validators can be unit tested