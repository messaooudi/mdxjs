import { ITokenConfig , createToken } from "chevrotain";

const SUBSET: ITokenConfig = {
    name: "SUBSET",
    label: "subset",
    pattern: /SUBSET/
};

export default createToken(SUBSET);