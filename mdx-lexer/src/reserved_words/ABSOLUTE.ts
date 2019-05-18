import { ITokenConfig , createToken } from "chevrotain";

const ABSOLUTE: ITokenConfig = {
    name: "ABSOLUTE key word",
    label: "absolute",
    pattern: /ABSOLUTE/
};

export default createToken(ABSOLUTE);