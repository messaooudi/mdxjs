import { ITokenConfig , createToken } from "chevrotain";

const DROP: ITokenConfig = {
    name: "DROP key word",
    label: "drop",
    pattern: /DROP/
};

export default createToken(DROP);