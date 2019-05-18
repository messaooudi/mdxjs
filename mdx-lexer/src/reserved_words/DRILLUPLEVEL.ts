import { ITokenConfig , createToken } from "chevrotain";

const DRILLUPLEVEL: ITokenConfig = {
    name: "DRILLUPLEVEL",
    label: "drillup level",
    pattern: /DRILLUPLEVEL/
};

export default createToken(DRILLUPLEVEL);