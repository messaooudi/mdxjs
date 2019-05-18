import { ITokenConfig , createToken } from "chevrotain";

const CREATE: ITokenConfig = {
    name: "CREATE key word",
    label: "create",
    pattern: /CREATE/
};

export default createToken(CREATE);