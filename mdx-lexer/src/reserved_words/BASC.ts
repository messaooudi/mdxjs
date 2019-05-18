import { ITokenConfig , createToken } from "chevrotain";

const BASC: ITokenConfig = {
    name: "BASC key word",
    label: "basc",
    pattern: /BASC/
};

export default createToken(BASC);