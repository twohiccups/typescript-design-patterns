import { UserCreateRequest } from "./request";
import { UserAgeValidator, UserIdValidator, UserNameValidator } from "./validator";

const goodUserRequest: UserCreateRequest = {
    id: "1004",
    name: 'Mikel',
    age: 44,
}

const badUserRequest: UserCreateRequest = {
    id: "1554",
    name: 'Lisa',
    age: 10,
}



const validationChain = new UserIdValidator(); // The head of the chain

validationChain
    .setNext(new UserNameValidator())
    .setNext(new UserAgeValidator());


console.log(goodUserRequest);
validationChain.process(goodUserRequest);

try {
    console.log(badUserRequest);
    validationChain.process(badUserRequest);
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error("Validation failed:", e.message);
    } else {
        console.error("Unknown error:", e);
    }
}
