import { ITokenConfig , createToken } from "chevrotain";

const PREVMEMBER: ITokenConfig = {
    name: "PREVMEMBER",
    label: "previous member",
    pattern: /PREVMEMBER/
};

export default createToken(PREVMEMBER);