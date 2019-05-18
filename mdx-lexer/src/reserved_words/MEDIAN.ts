import { ITokenConfig , createToken } from "chevrotain";

const MEDIAN: ITokenConfig = {
    name: "MEDIAN key word",
    label: "median",
    pattern: /MEDIAN/
};

export default createToken(MEDIAN);