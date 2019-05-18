import { ITokenConfig , createToken } from "chevrotain";

const SECTIONS: ITokenConfig = {
    name: "SECTIONS key word",
    label: "sections",
    pattern: /SECTIONS/
};

export default createToken(SECTIONS);