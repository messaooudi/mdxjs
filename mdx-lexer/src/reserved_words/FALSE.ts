import { ITokenConfig } from "chevrotain"

const FALSE: ITokenConfig = {
    label: "FALSE key word",
    name: "false",
    pattern: /FALSE/
};

export default createToken(FALSE);