import { ITokenConfig , createToken } from "chevrotain";

const AXIS: ITokenConfig = {
    label: "AXIS key word",
    name: "axis",
    pattern: /AXIS/
};

export default createToken(AXIS);