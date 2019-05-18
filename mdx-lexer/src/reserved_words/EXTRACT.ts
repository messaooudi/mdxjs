import { ITokenConfig , createToken } from "chevrotain";

const EXTRACT: ITokenConfig = {
    name: "EXTRACT",
    label: "extract",
    pattern: /EXTRACT/
};

export default createToken(EXTRACT);