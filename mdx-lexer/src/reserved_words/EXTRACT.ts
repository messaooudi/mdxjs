import { ITokenConfig , createToken } from "chevrotain";

const EXTRACT: ITokenConfig = {
    name: "EXTRACT key word",
    label: "extract",
    pattern: /EXTRACT/
};

export default createToken(EXTRACT);