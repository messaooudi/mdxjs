import { ITokenConfig } from "chevrotain"

const AVERAGE: ITokenConfig = {
    label: "AVERAGE key word",
    name: "average",
    pattern: /AVERAGE/
};

export default createToken(AVERAGE);