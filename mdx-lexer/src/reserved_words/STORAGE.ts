import { ITokenConfig , createToken } from "chevrotain";

const STORAGE: ITokenConfig = {
    name: "STORAGE",
    label: "storage",
    pattern: /STORAGE/
};

export default createToken(STORAGE);