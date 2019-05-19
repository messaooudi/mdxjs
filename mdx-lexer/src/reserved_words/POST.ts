import { ITokenConfig , createToken } from "chevrotain";

const POST: ITokenConfig = {
    name: "POST",
    label: "post",
    pattern: /POST/
};

export default createToken(POST);