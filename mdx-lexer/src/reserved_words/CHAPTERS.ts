import { ITokenConfig , createToken } from "chevrotain";

const CHAPTERS: ITokenConfig = {
    name: "CHAPTERS",
    label: "chapters",
    pattern: /CHAPTERS/
};

export default createToken(CHAPTERS);