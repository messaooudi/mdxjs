import { ITokenConfig } from "chevrotain"

const ROWS: ITokenConfig = {
    label: "ROWS key word",
    name: "rows",
    pattern: /ROWS/
};

export default createToken(ROWS);