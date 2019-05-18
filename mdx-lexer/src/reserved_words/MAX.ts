import { ITokenConfig , createToken } from "chevrotain";

const MAX: ITokenConfig = {
    name: "MAX",
    label: "max",
    pattern: /MAX/
};

export default createToken(MAX);