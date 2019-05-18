import { ITokenConfig , createToken } from "chevrotain";

const WHERE: ITokenConfig = {
    name: "WHERE",
    label: "where",
    pattern: /WHERE/
};

export default createToken(WHERE);