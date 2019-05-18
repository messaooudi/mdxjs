import { ITokenConfig , createToken } from "chevrotain";

const AXIS: ITokenConfig = {
    name: "AXIS key word",
    label: "axis",
    pattern: /AXIS/
};

export default createToken(AXIS);