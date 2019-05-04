import { ITokenConfig , createToken } from "chevrotain";

const MEDIAN: ITokenConfig = {
    label: "MEDIAN key word",
    name: "median",
    pattern: /MEDIAN/
};

export default createToken(MEDIAN);