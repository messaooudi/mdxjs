import { ITokenConfig , createToken } from "chevrotain";

const ITEM: ITokenConfig = {
    name: "ITEM key word",
    label: "item",
    pattern: /ITEM/
};

export default createToken(ITEM);