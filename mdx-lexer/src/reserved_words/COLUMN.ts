import { ITokenConfig , createToken } from "chevrotain";

const COLUMN: ITokenConfig = {
    name: "COLUMN key word",
    label: "column",
    pattern: /COLUMN/
};

export default createToken(COLUMN);