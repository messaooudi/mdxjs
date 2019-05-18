import { ITokenConfig , createToken } from "chevrotain";

const CREATE: ITokenConfig = {
    name: "CREATE",
    label: "create",
    pattern: /CREATE/
};

export default createToken(CREATE);