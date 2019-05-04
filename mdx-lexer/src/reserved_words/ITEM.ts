import { ITokenConfig , createToken } from "chevrotain";

const ITEM: ITokenConfig = {
    label: "ITEM key word",
    name: "item",
    pattern: /ITEM/
};

export default createToken(ITEM);