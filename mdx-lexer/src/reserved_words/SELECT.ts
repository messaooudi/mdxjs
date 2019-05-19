import { ITokenConfig , createToken } from "chevrotain";

const SELECT: ITokenConfig = {
    name: "SELECT",
    label: "select",
    pattern: /SELECT/
};

export default createToken(SELECT);