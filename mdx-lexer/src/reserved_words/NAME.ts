import { ITokenConfig , createToken } from "chevrotain";

const NAME: ITokenConfig = {
    name: "NAME",
    label: "name",
    pattern: /NAME/
};

export default createToken(NAME);