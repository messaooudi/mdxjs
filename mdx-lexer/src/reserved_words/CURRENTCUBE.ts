import { ITokenConfig , createToken } from "chevrotain";

const CURRENTCUBE: ITokenConfig = {
    name: "CURRENTCUBE key word",
    label: "current cube",
    pattern: /CURRENTCUBE/
};

export default createToken(CURRENTCUBE);