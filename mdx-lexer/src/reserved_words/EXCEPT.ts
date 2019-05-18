import { ITokenConfig , createToken } from "chevrotain";

const EXCEPT: ITokenConfig = {
    name: "EXCEPT key word",
    label: "except",
    pattern: /EXCEPT/
};

export default createToken(EXCEPT);