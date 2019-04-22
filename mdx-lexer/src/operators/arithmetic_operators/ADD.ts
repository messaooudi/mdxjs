import { ITokenConfig,createToken } from "chevrotain";

const ADD: ITokenConfig = {
    label: "ADD arethmetic operator",
    name: "add",
    pattern: /\+/
};

export default createToken(ADD);