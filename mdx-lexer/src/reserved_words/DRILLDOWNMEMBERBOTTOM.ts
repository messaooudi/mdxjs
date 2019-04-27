import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNMEMBERBOTTOM: ITokenConfig = {
    label: "DRILLDOWNMEMBERBOTTOM key word",
    name: "drilldown member bottom",
    pattern: /DRILLDOWNMEMBERBOTTOM/
};

export default createToken(DRILLDOWNMEMBERBOTTOM);