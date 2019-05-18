import { ITokenConfig , createToken } from "chevrotain";

const TYPE: ITokenConfig = {
    name: "TYPE",
    label: "type",
    pattern: /TYPE/
};

export default createToken(TYPE);