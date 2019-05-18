import { ITokenConfig , createToken } from "chevrotain";

const ADDCALCULATEDMEMBERS: ITokenConfig = {
    name: "ADDCALCULATEDMEMBERS",
    label: "add calculated members",
    pattern: /ADDCALCULATEDMEMBERS/
};

export default createToken(ADDCALCULATEDMEMBERS);