import { ITokenConfig , createToken } from "chevrotain";

const VAR: ITokenConfig = {
    label: "VAR key word",
    name: "var",
    pattern: /VAR/
};

export default createToken(VAR);