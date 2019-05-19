import { ITokenConfig , createToken } from "chevrotain";

const DROP: ITokenConfig = {
    name: "DROP",
    label: "drop",
    pattern: /DROP/
};

export default createToken(DROP);