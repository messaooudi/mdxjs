import { ITokenConfig , createToken } from "chevrotain";

const EXCEPT: ITokenConfig = {
    label: "EXCEPT key word",
    name: "except",
    pattern: /EXCEPT/
};

export default createToken(EXCEPT);