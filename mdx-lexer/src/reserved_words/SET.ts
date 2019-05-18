import { ITokenConfig , createToken } from "chevrotain";

const SET: ITokenConfig = {
    name: "SET",
    label: "set",
    pattern: /SET/
};

export default createToken(SET);