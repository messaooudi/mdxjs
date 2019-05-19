import { ITokenConfig , createToken } from "chevrotain";

const DRILLUPMEMBER: ITokenConfig = {
    name: "DRILLUPMEMBER",
    label: "drillup member",
    pattern: /DRILLUPMEMBER/
};

export default createToken(DRILLUPMEMBER);