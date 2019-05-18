import { ITokenConfig , createToken } from "chevrotain";

const COLUMN: ITokenConfig = {
    name: "COLUMN",
    label: "column",
    pattern: /COLUMN/
};

export default createToken(COLUMN);