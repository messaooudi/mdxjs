import { ITokenConfig , createToken } from "chevrotain";

const DESCRIPTION: ITokenConfig = {
    name: "DESCRIPTION key word",
    label: "description",
    pattern: /DESCRIPTION/
};

export default createToken(DESCRIPTION);