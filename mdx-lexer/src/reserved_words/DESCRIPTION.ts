import { ITokenConfig , createToken } from "chevrotain";

const DESCRIPTION: ITokenConfig = {
    name: "DESCRIPTION",
    label: "description",
    pattern: /DESCRIPTION/
};

export default createToken(DESCRIPTION);