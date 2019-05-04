import { ITokenConfig , createToken } from "chevrotain";

const TAIL: ITokenConfig = {
    label: "TAIL key word",
    name: "tail",
    pattern: /TAIL/
};

export default createToken(TAIL);