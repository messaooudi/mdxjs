import { ITokenConfig } from "chevrotain"

const LOOKUPCUBE: ITokenConfig = {
    label: "LOOKUPCUBE key word",
    name: "lookup cube",
    pattern: /LOOKUPCUBE/
};

export default createToken(LOOKUPCUBE);