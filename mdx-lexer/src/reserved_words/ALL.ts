import { ITokenConfig } from "chevrotain";
import ALLMEMBERS from "./ALLMEMBERS";

const ALL: ITokenConfig = {
    label: "ALL key word",
    name: "all",
    pattern: /ALL/,
    longer_alt : ALLMEMBERS
};

export default ALL;