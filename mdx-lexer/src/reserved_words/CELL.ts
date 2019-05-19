import { ITokenConfig , createToken } from "chevrotain";

const CELL: ITokenConfig = {
    name: "CELL",
    label: "cell",
    pattern: /CELL/
};

export default createToken(CELL);