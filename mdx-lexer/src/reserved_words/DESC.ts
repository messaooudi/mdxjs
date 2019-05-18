import { ITokenConfig , createToken } from "chevrotain";

const DESC: ITokenConfig = {
    name: "DESC",
    label: "desc",
    pattern: /DESC/
};

export default createToken(DESC);