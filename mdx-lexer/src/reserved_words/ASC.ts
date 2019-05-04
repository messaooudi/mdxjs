import { ITokenConfig , createToken } from "chevrotain";

const ASC: ITokenConfig = {
    label: "ASC key word",
    name: "asc",
    pattern: /ASC/
};

export default createToken(ASC);