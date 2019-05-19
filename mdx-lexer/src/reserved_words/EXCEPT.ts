import { ITokenConfig , createToken } from "chevrotain";

const EXCEPT: ITokenConfig = {
    name: "EXCEPT",
    label: "except",
    pattern: /EXCEPT/
};

export default createToken(EXCEPT);