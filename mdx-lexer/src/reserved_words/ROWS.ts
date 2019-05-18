import { ITokenConfig , createToken } from "chevrotain";

const ROWS: ITokenConfig = {
    name: "ROWS key word",
    label: "rows",
    pattern: /ROWS/
};

export default createToken(ROWS);