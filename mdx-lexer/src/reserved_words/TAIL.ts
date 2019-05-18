import { ITokenConfig , createToken } from "chevrotain";

const TAIL: ITokenConfig = {
    name: "TAIL key word",
    label: "tail",
    pattern: /TAIL/
};

export default createToken(TAIL);