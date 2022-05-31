import {GUIFactory} from "./factory";
import {Button, Checkbox} from "./product";

export class Application {
    private factory: GUIFactory
    public button: Button
    public checkbox: Checkbox

    public constructor(factory: GUIFactory) {
        this.factory = factory
    }

    private createUI() {
        this.button = this.factory.createButton()
        this.checkbox = this.factory.createCheckbox()
    }

    public paint() {
        this.createUI()
        console.log('UI is rendering')
    }
}