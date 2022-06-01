export abstract class AbstractCorollaImp {
    abstract listSafetyEquipment(): void
    abstract isCarRightHanded(): boolean
}

export class Corolla_L_Impl_AsiaPacific extends AbstractCorollaImp {
    isCarRightHanded(): boolean {
        return false;
    }

    listSafetyEquipment(): void {
        console.log('Safe I')
    }
}

export class Corolla_L_Impl_NorthAmerica extends AbstractCorollaImp {
    isCarRightHanded(): boolean {
        return true;
    }

    listSafetyEquipment(): void {
        console.log('Safe II')
    }
}