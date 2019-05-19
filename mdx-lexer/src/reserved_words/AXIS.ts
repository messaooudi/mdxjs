import { ITokenConfig , createToken } from "chevrotain";

const AXIS: ITokenConfig = {
    name: "AXIS",
    label: "axis",
    pattern: /AXIS/
};

export default createToken(AXIS);