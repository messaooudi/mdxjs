import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNMEMBER: ITokenConfig = {
    name: "DRILLDOWNMEMBER key word",
    label: "drilldown member",
    pattern: /DRILLDOWNMEMBER/
};

export default createToken(DRILLDOWNMEMBER);