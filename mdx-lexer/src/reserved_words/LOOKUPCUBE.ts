import { ITokenConfig , createToken } from "chevrotain";

const LOOKUPCUBE: ITokenConfig = {
    name: "LOOKUPCUBE key word",
    label: "lookup cube",
    pattern: /LOOKUPCUBE/
};

export default createToken(LOOKUPCUBE);