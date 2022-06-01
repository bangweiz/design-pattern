import {AbstractCorollaImp} from "./implementor";

export abstract class AbstractCorolla {
    protected corolla: AbstractCorollaImp
    public constructor(corolla: AbstractCorollaImp) {
        this.corolla = corolla
    }

    abstract listSafetyEquipment(): void
    abstract isCarRightHanded(): boolean
}

export class Corolla_L extends AbstractCorolla {
    public listSafetyEquipment() {
        this.corolla.listSafetyEquipment()
    }
    public isCarRightHanded(): boolean {
        return this.corolla.isCarRightHanded()
    }
}