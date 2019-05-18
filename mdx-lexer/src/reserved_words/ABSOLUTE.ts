import { ITokenConfig , createToken } from "chevrotain";

const ABSOLUTE: ITokenConfig = {
    name: "ABSOLUTE",
    label: "absolute",
    pattern: /ABSOLUTE/
};

export default createToken(ABSOLUTE);