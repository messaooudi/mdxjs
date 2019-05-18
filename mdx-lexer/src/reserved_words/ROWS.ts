import { ITokenConfig , createToken } from "chevrotain";

const ROWS: ITokenConfig = {
    name: "ROWS",
    label: "rows",
    pattern: /ROWS/
};

export default createToken(ROWS);