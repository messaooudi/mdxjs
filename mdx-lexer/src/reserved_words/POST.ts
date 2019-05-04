import { ITokenConfig , createToken } from "chevrotain";

const POST: ITokenConfig = {
    label: "POST key word",
    name: "post",
    pattern: /POST/
};

export default createToken(POST);