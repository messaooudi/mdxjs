import { ITokenConfig , createToken } from "chevrotain";

const CURRENTCUBE: ITokenConfig = {
    name: "CURRENTCUBE",
    label: "current cube",
    pattern: /CURRENTCUBE/
};

export default createToken(CURRENTCUBE);