import { ITokenConfig , createToken } from "chevrotain";

const FROM: ITokenConfig = {
    name: "FROM",
    label: "from",
    pattern: /FROM/
};

export default createToken(FROM);