import {Application} from "./client";
import {MacFactory, WinFactory} from "./factory";

const winApp = new Application(new WinFactory())
const macApp= new Application(new MacFactory())

winApp.paint()
macApp.paint()