import { ITokenConfig , createToken } from "chevrotain";

const SET: ITokenConfig = {
    label: "SET key word",
    name: "set",
    pattern: /SET/
};

export default createToken(SET);