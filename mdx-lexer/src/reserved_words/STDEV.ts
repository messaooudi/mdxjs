import { ITokenConfig , createToken } from "chevrotain";

const STDEV: ITokenConfig = {
    name: "STDEV",
    label: "stdev",
    pattern: /STDEV/
};

export default createToken(STDEV);