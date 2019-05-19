import { ITokenConfig , createToken } from "chevrotain";

const GROUP: ITokenConfig = {
    name: "GROUP",
    label: "group",
    pattern: /GROUP/
};

export default createToken(GROUP);