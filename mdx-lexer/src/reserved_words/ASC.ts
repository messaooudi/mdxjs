import { ITokenConfig , createToken } from "chevrotain";

const ASC: ITokenConfig = {
    name: "ASC key word",
    label: "asc",
    pattern: /ASC/
};

export default createToken(ASC);