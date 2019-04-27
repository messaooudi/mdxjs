import { ITokenConfig , createToken } from "chevrotain";

const DRILLUPLEVEL: ITokenConfig = {
    label: "DRILLUPLEVEL key word",
    name: "drillup level",
    pattern: /DRILLUPLEVEL/
};

export default createToken(DRILLUPLEVEL);