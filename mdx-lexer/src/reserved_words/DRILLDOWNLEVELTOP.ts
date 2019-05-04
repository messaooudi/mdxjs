import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNLEVELTOP: ITokenConfig = {
    label: "DRILLDOWNLEVELTOP key word",
    name: "dirlldown level top",
    pattern: /DRILLDOWNLEVELTOP/
};

export default createToken(DRILLDOWNLEVELTOP);