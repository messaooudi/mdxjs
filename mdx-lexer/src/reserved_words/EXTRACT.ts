import { ITokenConfig , createToken } from "chevrotain";

const EXTRACT: ITokenConfig = {
    label: "EXTRACT key word",
    name: "extract",
    pattern: /EXTRACT/
};

export default createToken(EXTRACT);