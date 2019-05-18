import { ITokenConfig , createToken } from "chevrotain";

const VAR: ITokenConfig = {
    name: "VAR key word",
    label: "var",
    pattern: /VAR/
};

export default createToken(VAR);