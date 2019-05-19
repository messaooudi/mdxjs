import { ITokenConfig , createToken } from "chevrotain";

const TAIL: ITokenConfig = {
    name: "TAIL",
    label: "tail",
    pattern: /TAIL/
};

export default createToken(TAIL);