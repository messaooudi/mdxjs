import { ITokenConfig , createToken } from "chevrotain";

const ASC: ITokenConfig = {
    name: "ASC",
    label: "asc",
    pattern: /ASC/
};

export default createToken(ASC);