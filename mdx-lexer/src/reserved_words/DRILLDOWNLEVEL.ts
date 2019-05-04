import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNLEVEL: ITokenConfig = {
    label: "DRILLDOWNLEVEL key word",
    name: "drilldown level",
    pattern: /DRILLDOWNLEVEL/
};

export default createToken(DRILLDOWNLEVEL);