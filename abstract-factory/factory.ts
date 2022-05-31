import {Button, Checkbox, MacButton, MacCheckbox, WinButton, WinCheckbox} from "./product";

export interface GUIFactory {
    createButton(): Button
    createCheckbox(): Checkbox
}

export class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }

    createCheckbox(): Checkbox {
        return WinCheckbox;
    }
}

export class MacFactory implements GUIFactory {
    createButton(): Button {
        return MacButton;
    }

    createCheckbox(): Checkbox {
        return MacCheckbox;
    }
}