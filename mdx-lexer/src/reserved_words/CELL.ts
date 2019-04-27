import { ITokenConfig } from "chevrotain"

const CELL: ITokenConfig = {
    label: "CELL key word",
    name: "cell",
    pattern: /CELL/
};

export default createToken(CELL);