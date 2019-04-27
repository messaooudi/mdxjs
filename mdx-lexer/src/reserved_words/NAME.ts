import { ITokenConfig , createToken } from "chevrotain";

const NAME: ITokenConfig = {
    label: "NAME key word",
    name: "name",
    pattern: /NAME/
};

export default createToken(NAME);