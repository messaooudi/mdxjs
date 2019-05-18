import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNLEVEL: ITokenConfig = {
    name: "DRILLDOWNLEVEL key word",
    label: "drilldown level",
    pattern: /DRILLDOWNLEVEL/
};

export default createToken(DRILLDOWNLEVEL);