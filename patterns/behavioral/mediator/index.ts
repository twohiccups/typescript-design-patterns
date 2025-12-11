// index.ts

import { AgreementForm } from "./mediator";

function demoAgreementForm() {
    const form = new AgreementForm();

    console.log("=== Demo: Agreement Form with Mediator ===\n");

    console.log("Step 1: User types only name (no email yet)");
    form.fullNameInput.input("Alice Wonderland");
    console.log("");

    console.log("Step 2: User types an invalid email");
    form.emailInput.input("not-an-email");
    console.log("");

    console.log("Step 3: User checks the agreement checkbox");
    form.agreementCheckBox.toggle();

    console.log("Step 4: User tries to submit with invalid email");
    form.submitButton.click();

    console.log("Step 5: User fixes email");
    form.emailInput.input("alice@example.com");

    console.log("Step 6: User submits with valid data");
    form.submitButton.click(); // should pass and "submit" the form

    console.log("Step 7: User un-checks agreement and tries again");
    form.agreementCheckBox.toggle(); // toggles to false, disables submit
    form.submitButton.click(); // should do nothing (button disabled)
}

demoAgreementForm();
