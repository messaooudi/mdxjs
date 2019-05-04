import { ITokenConfig , createToken } from "chevrotain";

const GROUP: ITokenConfig = {
    label: "GROUP key word",
    name: "group",
    pattern: /GROUP/
};

export default createToken(GROUP);