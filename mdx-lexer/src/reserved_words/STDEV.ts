import { ITokenConfig , createToken } from "chevrotain";

const STDEV: ITokenConfig = {
    label: "STDEV key word",
    name: "stdev",
    pattern: /STDEV/
};

export default createToken(STDEV);