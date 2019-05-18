import { ITokenConfig , createToken } from "chevrotain";

const VALUE: ITokenConfig = {
    name: "VALUE",
    label: "value",
    pattern: /VALUE/
};

export default createToken(VALUE);