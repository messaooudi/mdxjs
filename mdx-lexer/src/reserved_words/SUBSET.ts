import { ITokenConfig , createToken } from "chevrotain";

const SUBSET: ITokenConfig = {
    name: "SUBSET key word",
    label: "subset",
    pattern: /SUBSET/
};

export default createToken(SUBSET);