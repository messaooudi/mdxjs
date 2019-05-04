import { ITokenConfig , createToken } from "chevrotain";

const DESCRIPTION: ITokenConfig = {
    label: "DESCRIPTION key word",
    name: "description",
    pattern: /DESCRIPTION/
};

export default createToken(DESCRIPTION);