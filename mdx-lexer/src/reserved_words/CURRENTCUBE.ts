import { ITokenConfig } from "chevrotain"

const CURRENTCUBE: ITokenConfig = {
    label: "CURRENTCUBE key word",
    name: "current cube",
    pattern: /CURRENTCUBE/
};

export default createToken(CURRENTCUBE);