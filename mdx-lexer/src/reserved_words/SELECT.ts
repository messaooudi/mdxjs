import { ITokenConfig , createToken } from "chevrotain";

const SELECT: ITokenConfig = {
    label: "SELECT key word",
    name: "select",
    pattern: /SELECT/
};

export default createToken(SELECT);