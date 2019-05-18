import { ITokenConfig , createToken } from "chevrotain";

const ITEM: ITokenConfig = {
    name: "ITEM",
    label: "item",
    pattern: /ITEM/
};

export default createToken(ITEM);