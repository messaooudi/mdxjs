import { ITokenConfig , createToken } from "chevrotain";

const PAGES: ITokenConfig = {
    name: "PAGES",
    label: "pages",
    pattern: /PAGES/
};

export default createToken(PAGES);