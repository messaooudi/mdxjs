import { ITokenConfig , createToken } from "chevrotain";

const ADDCALCULATEDMEMBERS: ITokenConfig = {
    name: "ADDCALCULATEDMEMBERS key word",
    label: "add calculated members",
    pattern: /ADDCALCULATEDMEMBERS/
};

export default createToken(ADDCALCULATEDMEMBERS);