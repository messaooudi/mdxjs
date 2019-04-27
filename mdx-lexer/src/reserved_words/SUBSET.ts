import { ITokenConfig , createToken } from "chevrotain";

const SUBSET: ITokenConfig = {
    label: "SUBSET key word",
    name: "subset",
    pattern: /SUBSET/
};

export default createToken(SUBSET);