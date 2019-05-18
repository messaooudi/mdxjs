import { ITokenConfig , createToken } from "chevrotain";

const STDDEV: ITokenConfig = {
    name: "STDDEV key word",
    label: "stddev",
    pattern: /STDDEV/
};

export default createToken(STDDEV);