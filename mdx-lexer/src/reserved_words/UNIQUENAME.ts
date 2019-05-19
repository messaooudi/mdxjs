import { ITokenConfig , createToken } from "chevrotain";

const UNIQUENAME: ITokenConfig = {
    name: "UNIQUENAME",
    label: "unique name",
    pattern: /UNIQUENAME/
};

export default createToken(UNIQUENAME);