import { Command } from "./command";

export class Button {
    private command?: Command;

    constructor(
        private readonly name: string
    ) { }

    setOnClick(command: Command) {
        this.command = command;
    };

    click(): void {
        console.log(`Button Clicked: ${this.name}`);
        if (this.command) {
            this.command.execute();
        } else {
            console.log('No command attached');
        }
    }

}
