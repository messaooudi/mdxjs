import { ITokenConfig , createToken } from "chevrotain";

const GROUP: ITokenConfig = {
    name: "GROUP key word",
    label: "group",
    pattern: /GROUP/
};

export default createToken(GROUP);