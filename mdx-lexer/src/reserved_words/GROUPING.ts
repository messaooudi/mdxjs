import { ITokenConfig , createToken } from "chevrotain";

const GROUPING: ITokenConfig = {
    name: "GROUPING",
    label: "grouping",
    pattern: /GROUPING/
};

export default createToken(GROUPING);