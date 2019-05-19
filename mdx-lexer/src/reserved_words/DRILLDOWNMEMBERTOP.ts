import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNMEMBERTOP: ITokenConfig = {
    name: "DRILLDOWNMEMBERTOP",
    label: "drilldown memeber top",
    pattern: /DRILLDOWNMEMBERTOP/
};

export default createToken(DRILLDOWNMEMBERTOP);