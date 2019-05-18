import { ITokenConfig , createToken } from "chevrotain";

const STDEV: ITokenConfig = {
    name: "STDEV key word",
    label: "stdev",
    pattern: /STDEV/
};

export default createToken(STDEV);