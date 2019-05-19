import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNMEMBER: ITokenConfig = {
    name: "DRILLDOWNMEMBER",
    label: "drilldown member",
    pattern: /DRILLDOWNMEMBER/
};

export default createToken(DRILLDOWNMEMBER);