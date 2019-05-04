import { ITokenConfig , createToken } from "chevrotain";

const DROP: ITokenConfig = {
    label: "DROP key word",
    name: "drop",
    pattern: /DROP/
};

export default createToken(DROP);