import { ITokenConfig , createToken } from "chevrotain";

const COLUMNS: ITokenConfig = {
    name: "COLUMNS",
    label: "columns",
    pattern: /COLUMNS/
};

export default createToken(COLUMNS);