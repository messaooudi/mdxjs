import { ITokenConfig , createToken } from "chevrotain";

const COLUMN: ITokenConfig = {
    label: "COLUMN key word",
    name: "column",
    pattern: /COLUMN/
};

export default createToken(COLUMN);