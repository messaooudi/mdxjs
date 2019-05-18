import { ITokenConfig , createToken } from "chevrotain";

const SECTIONS: ITokenConfig = {
    name: "SECTIONS",
    label: "sections",
    pattern: /SECTIONS/
};

export default createToken(SECTIONS);