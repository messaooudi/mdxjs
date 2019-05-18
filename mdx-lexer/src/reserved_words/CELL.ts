import { ITokenConfig , createToken } from "chevrotain";

const CELL: ITokenConfig = {
    name: "CELL key word",
    label: "cell",
    pattern: /CELL/
};

export default createToken(CELL);