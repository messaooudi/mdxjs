import { ITokenConfig , createToken } from "chevrotain";

const DRILLUPMEMBER: ITokenConfig = {
    name: "DRILLUPMEMBER key word",
    label: "drillup member",
    pattern: /DRILLUPMEMBER/
};

export default createToken(DRILLUPMEMBER);