import { ITokenConfig , createToken } from "chevrotain";

const ERROR: ITokenConfig = {
    label: "ERROR key word",
    name: "error",
    pattern: /ERROR/
};

export default createToken(ERROR);