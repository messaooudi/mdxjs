import { ITokenConfig , createToken } from "chevrotain";

const FROM: ITokenConfig = {
    label: "FROM key word",
    name: "from",
    pattern: /FROM/
};

export default createToken(FROM);