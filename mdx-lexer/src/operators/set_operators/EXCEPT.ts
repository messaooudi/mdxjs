import { ITokenConfig, createToken } from "chevrotain"

const EXCEPT: ITokenConfig = {
    label: "EXCEPT set operator",
    name: "except",
    pattern: /-/
};

export default createToken(EXCEPT);