import { ITokenConfig , createToken } from "chevrotain";

const SET: ITokenConfig = {
    name: "SET key word",
    label: "set",
    pattern: /SET/
};

export default createToken(SET);