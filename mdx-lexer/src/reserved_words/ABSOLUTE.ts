import { ITokenConfig , createToken } from "chevrotain";

const ABSOLUTE: ITokenConfig = {
    label: "ABSOLUTE key word",
    name: "absolute",
    pattern: /ABSOLUTE/
};

export default createToken(ABSOLUTE);