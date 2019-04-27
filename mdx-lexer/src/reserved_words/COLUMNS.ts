import { ITokenConfig , createToken } from "chevrotain";

const COLUMNS: ITokenConfig = {
    label: "COLUMNS key word",
    name: "columns",
    pattern: /COLUMNS/
};

export default createToken(COLUMNS);