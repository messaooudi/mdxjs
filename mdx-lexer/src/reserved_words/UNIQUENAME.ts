import { ITokenConfig , createToken } from "chevrotain";

const UNIQUENAME: ITokenConfig = {
    name: "UNIQUENAME key word",
    label: "unique name",
    pattern: /UNIQUENAME/
};

export default createToken(UNIQUENAME);