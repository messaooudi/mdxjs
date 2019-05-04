import { ITokenConfig , createToken } from "chevrotain";

const WHERE: ITokenConfig = {
    label: "WHERE key word",
    name: "where",
    pattern: /WHERE/
};

export default createToken(WHERE);