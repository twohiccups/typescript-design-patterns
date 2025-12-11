import { Button, CheckBox, TextInput, type Component, type UIEventType } from "./uiComponents";


export interface Mediator {
    notify(sender: Component, eventType: UIEventType): void;
}




export class AgreementForm implements Mediator {
    fullNameInput: TextInput;
    emailInput: TextInput;
    agreementCheckBox: CheckBox;
    submitButton: Button;

    constructor() {
        this.fullNameInput = new TextInput(this, 'fullName');
        this.emailInput = new TextInput(this, 'email');
        this.agreementCheckBox = new CheckBox(this, 'agreement');
        this.submitButton = new Button(this, 'submit');

        // Ensure button starts disabled
        this.submitButton.setEnabled(false);
    }

    notify(sender: Component, eventType: UIEventType): void {
        if (eventType === 'input') {
            if (sender === this.fullNameInput) {
                this.validateFullName();
            } else if (sender === this.emailInput) {
                this.validateEmail();
            }
        }

        if (eventType === 'toggle' && sender === this.agreementCheckBox) {
            this.handleAgreementToggle();
        }

        if (eventType === 'click' && sender === this.submitButton) {
            this.handleSubmit();
        }
    }

    private validateFullName() {
        const name = this.fullNameInput.getText().trim();
        if (!name) {
            console.log('Full name is required');
        } else {
            console.log('Full name looks good');
        }

        this.updateSubmitButtonState();
    }

    private validateEmail() {
        const email = this.emailInput.getText().trim();
        if (!email.includes('@')) {
            console.log('Please enter a valid email');
        } else {
            console.log('Email looks good');
        }

        this.updateSubmitButtonState();
    }

    private handleAgreementToggle() {
        if (this.agreementCheckBox.isChecked()) {
            console.log('User accepted the agreement');
        } else {
            console.log('User un-checked the agreement');
        }

        this.updateSubmitButtonState();
    }

    private updateSubmitButtonState() {
        const nameValid = this.fullNameInput.getText().trim().length > 0;
        const emailValid = this.emailInput.getText().trim().includes('@');
        const agreed = this.agreementCheckBox.isChecked();

        const shouldEnable = nameValid && emailValid && agreed;

        this.submitButton.setEnabled(shouldEnable);

        console.log(`Submit button is now: ${shouldEnable ? 'ENABLED' : 'DISABLED'}`);
    }

    private handleSubmit() {
        if (!this.submitButton.isEnabled()) {
            console.log("Submit blocked: button is disabled");
            return;
        }

        const name = this.fullNameInput.getText().trim();
        const email = this.emailInput.getText().trim();
        const agreed = this.agreementCheckBox.isChecked();

        console.log('Submitting form:', { name, email, agreed });
    }
}
