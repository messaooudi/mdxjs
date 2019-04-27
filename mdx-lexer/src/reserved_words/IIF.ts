import { ITokenConfig , createToken } from "chevrotain";

const IIF: ITokenConfig = {
    label: "IIF key word",
    name: "iif",
    pattern: /IIF/
};

export default createToken(IIF);