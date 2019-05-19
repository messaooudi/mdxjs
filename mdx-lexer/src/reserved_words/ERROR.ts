import { ITokenConfig , createToken } from "chevrotain";

const ERROR: ITokenConfig = {
    name: "ERROR",
    label: "error",
    pattern: /ERROR/
};

export default createToken(ERROR);