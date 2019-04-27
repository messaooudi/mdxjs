import { ITokenConfig , createToken } from "chevrotain";

const PAGES: ITokenConfig = {
    label: "PAGES key word",
    name: "pages",
    pattern: /PAGES/
};

export default createToken(PAGES);