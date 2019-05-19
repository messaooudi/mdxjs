import { ITokenConfig , createToken } from "chevrotain";

const FALSE: ITokenConfig = {
    name: "FALSE",
    label: "false",
    pattern: /FALSE/
};

export default createToken(FALSE);