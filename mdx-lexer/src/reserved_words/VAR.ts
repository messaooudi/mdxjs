import { ITokenConfig , createToken } from "chevrotain";

const VAR: ITokenConfig = {
    name: "VAR",
    label: "var",
    pattern: /VAR/
};

export default createToken(VAR);