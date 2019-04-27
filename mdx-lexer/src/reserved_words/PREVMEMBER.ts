import { ITokenConfig } from "chevrotain"

const PREVMEMBER: ITokenConfig = {
    label: "PREVMEMBER key word",
    name: "previous member",
    pattern: /PREVMEMBER/
};

export default createToken(PREVMEMBER);