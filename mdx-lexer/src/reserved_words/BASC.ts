import { ITokenConfig , createToken } from "chevrotain";

const BASC: ITokenConfig = {
    name: "BASC",
    label: "basc",
    pattern: /BASC/
};

export default createToken(BASC);