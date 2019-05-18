import { ITokenConfig , createToken } from "chevrotain";

const NAME: ITokenConfig = {
    name: "NAME key word",
    label: "name",
    pattern: /NAME/
};

export default createToken(NAME);