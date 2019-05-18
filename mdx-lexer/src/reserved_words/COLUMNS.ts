import { ITokenConfig , createToken } from "chevrotain";

const COLUMNS: ITokenConfig = {
    name: "COLUMNS key word",
    label: "columns",
    pattern: /COLUMNS/
};

export default createToken(COLUMNS);