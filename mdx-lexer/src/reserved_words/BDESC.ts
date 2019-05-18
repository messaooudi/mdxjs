import { ITokenConfig , createToken } from "chevrotain";

const BDESC: ITokenConfig = {
    name: "BDESC",
    label: "bdesc",
    pattern: /BDESC/
};

export default createToken(BDESC);