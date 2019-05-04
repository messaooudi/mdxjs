import { ITokenConfig , createToken } from "chevrotain";

const TYPE: ITokenConfig = {
    label: "TYPE key word",
    name: "type",
    pattern: /TYPE/
};

export default createToken(TYPE);