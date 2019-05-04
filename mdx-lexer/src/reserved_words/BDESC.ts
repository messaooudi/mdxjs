import { ITokenConfig , createToken } from "chevrotain";

const BDESC: ITokenConfig = {
    label: "BDESC key word",
    name: "bdesc",
    pattern: /BDESC/
};

export default createToken(BDESC);