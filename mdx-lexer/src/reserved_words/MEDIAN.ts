import { ITokenConfig , createToken } from "chevrotain";

const MEDIAN: ITokenConfig = {
    name: "MEDIAN",
    label: "median",
    pattern: /MEDIAN/
};

export default createToken(MEDIAN);