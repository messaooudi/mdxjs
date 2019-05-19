import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNLEVEL: ITokenConfig = {
    name: "DRILLDOWNLEVEL",
    label: "drilldown level",
    pattern: /DRILLDOWNLEVEL/
};

export default createToken(DRILLDOWNLEVEL);