import { ITokenConfig , createToken } from "chevrotain";

const BDESC: ITokenConfig = {
    name: "BDESC key word",
    label: "bdesc",
    pattern: /BDESC/
};

export default createToken(BDESC);