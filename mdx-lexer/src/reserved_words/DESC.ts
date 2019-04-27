import { ITokenConfig } from "chevrotain"

const DESC: ITokenConfig = {
    label: "DESC key word",
    name: "desc",
    pattern: /DESC/
};

export default createToken(DESC);