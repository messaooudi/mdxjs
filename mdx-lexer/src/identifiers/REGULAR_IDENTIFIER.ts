import { ITokenConfig } from "chevrotain"

const REGULAR_IDENTIFIER: ITokenConfig = {
    label: "REGULAR_IDENTIFIER identifier",
    name: "REGULAR_IDENTIFIER",
    pattern: /^[a-zA-Z_][a-zA-Z_0-9]{0,100}/
};

export default REGULAR_IDENTIFIER;