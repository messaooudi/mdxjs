import { ITokenConfig, createToken } from "chevrotain"

const EXCEPT: ITokenConfig = {
    name: "EXCEPT set operator",
    label: "except",
    pattern: /-/
};

export default createToken(EXCEPT);