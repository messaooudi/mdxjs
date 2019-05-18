import { ITokenConfig , createToken } from "chevrotain";

const DESC: ITokenConfig = {
    name: "DESC key word",
    label: "desc",
    pattern: /DESC/
};

export default createToken(DESC);