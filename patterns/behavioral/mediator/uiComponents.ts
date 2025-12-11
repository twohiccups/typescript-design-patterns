import type { Mediator } from "./mediator";


export abstract class Component {
    constructor(protected mediator: Mediator, protected id: string) { }
}

export type UIEventType = 'click' | 'input' | 'toggle';



export class Button extends Component {
    private enabled: boolean;

    constructor(mediator: Mediator, id: string) {
        super(mediator, id);
        this.enabled = false;
    }

    click() {
        if (this.enabled) {
            this.mediator.notify(this, 'click');
        }
    }

    setEnabled(enabled: boolean) {
        this.enabled = enabled;
    }

    isEnabled(): boolean {
        return this.enabled;
    }
}

export class TextInput extends Component {
    private text: string;

    constructor(mediator: Mediator, id: string) {
        super(mediator, id);
        this.text = '';
    }

    input(value: string) {
        this.text = value;

        this.mediator.notify(this, 'input');
    }

    setText(text: string): void {
        this.text = text;
    }

    getText(): string {
        return this.text;
    }
}


export class CheckBox extends Component {
    private checked: boolean;

    constructor(mediator: Mediator, id: string) {
        super(mediator, id);
        this.checked = false;
    }

    toggle(): void {
        this.checked = !this.checked;
        this.mediator.notify(this, 'toggle');
    }

    isChecked(): boolean {
        return this.checked
    }

}

