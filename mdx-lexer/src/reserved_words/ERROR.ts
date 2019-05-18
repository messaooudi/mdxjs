import { ITokenConfig , createToken } from "chevrotain";

const ERROR: ITokenConfig = {
    name: "ERROR key word",
    label: "error",
    pattern: /ERROR/
};

export default createToken(ERROR);