import { ITokenConfig , createToken } from "chevrotain";

const SELECT: ITokenConfig = {
    name: "SELECT key word",
    label: "select",
    pattern: /SELECT/
};

export default createToken(SELECT);