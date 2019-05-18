import { ITokenConfig , createToken } from "chevrotain";

const FROM: ITokenConfig = {
    name: "FROM key word",
    label: "from",
    pattern: /FROM/
};

export default createToken(FROM);