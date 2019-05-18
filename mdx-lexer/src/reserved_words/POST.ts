import { ITokenConfig , createToken } from "chevrotain";

const POST: ITokenConfig = {
    name: "POST key word",
    label: "post",
    pattern: /POST/
};

export default createToken(POST);