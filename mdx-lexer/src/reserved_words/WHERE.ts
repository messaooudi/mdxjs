import { ITokenConfig , createToken } from "chevrotain";

const WHERE: ITokenConfig = {
    name: "WHERE key word",
    label: "where",
    pattern: /WHERE/
};

export default createToken(WHERE);