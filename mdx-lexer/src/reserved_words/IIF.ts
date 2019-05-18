import { ITokenConfig , createToken } from "chevrotain";

const IIF: ITokenConfig = {
    name: "IIF key word",
    label: "iif",
    pattern: /IIF/
};

export default createToken(IIF);