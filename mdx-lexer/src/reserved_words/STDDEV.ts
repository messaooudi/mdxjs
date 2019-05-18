import { ITokenConfig , createToken } from "chevrotain";

const STDDEV: ITokenConfig = {
    name: "STDDEV",
    label: "stddev",
    pattern: /STDDEV/
};

export default createToken(STDDEV);