import { ITokenConfig , createToken } from "chevrotain";

const PAGES: ITokenConfig = {
    name: "PAGES key word",
    label: "pages",
    pattern: /PAGES/
};

export default createToken(PAGES);