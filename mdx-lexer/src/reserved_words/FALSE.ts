import { ITokenConfig , createToken } from "chevrotain";

const FALSE: ITokenConfig = {
    name: "FALSE key word",
    label: "false",
    pattern: /FALSE/
};

export default createToken(FALSE);