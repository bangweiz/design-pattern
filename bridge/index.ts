import {Corolla_L} from "./abstraction";
import {Corolla_L_Impl_AsiaPacific} from "./implementor";

const myCorolla = new Corolla_L(new Corolla_L_Impl_AsiaPacific())
console.log(myCorolla.isCarRightHanded())
myCorolla.listSafetyEquipment()