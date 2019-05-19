import { ITokenConfig , createToken } from "chevrotain";

const IIF: ITokenConfig = {
    name: "IIF",
    label: "iif",
    pattern: /IIF/
};

export default createToken(IIF);