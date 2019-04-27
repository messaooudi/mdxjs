import { ITokenConfig } from "chevrotain"

const CREATE: ITokenConfig = {
    label: "CREATE key word",
    name: "create",
    pattern: /CREATE/
};

export default createToken(CREATE);