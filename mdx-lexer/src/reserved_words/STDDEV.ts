import { ITokenConfig , createToken } from "chevrotain";

const STDDEV: ITokenConfig = {
    label: "STDDEV key word",
    name: "stddev",
    pattern: /STDDEV/
};

export default createToken(STDDEV);