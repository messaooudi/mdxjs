import { ITokenConfig , createToken } from "chevrotain";

const TYPE: ITokenConfig = {
    name: "TYPE key word",
    label: "type",
    pattern: /TYPE/
};

export default createToken(TYPE);