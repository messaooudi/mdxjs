import { ITokenConfig , createToken } from "chevrotain";

const CREATEPROPERTYSET: ITokenConfig = {
    name: "CREATEPROPERTYSET",
    label: "create property set",
    pattern: /CREATEPROPERTYSET/
};

export default createToken(CREATEPROPERTYSET);