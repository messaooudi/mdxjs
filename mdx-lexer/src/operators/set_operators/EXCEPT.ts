import { ITokenConfig, createToken } from "chevrotain"

const EXCEPT: ITokenConfig = {
    name: "EXCEPT set",
    label: "except",
    pattern: /-/
};

export default createToken(EXCEPT);