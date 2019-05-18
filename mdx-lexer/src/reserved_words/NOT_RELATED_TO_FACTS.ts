import { ITokenConfig , createToken } from "chevrotain";

const NOT_RELATED_TO_FACTS: ITokenConfig = {
    name: "NOT_RELATED_TO_FACTS",
    label: "not related to facts",
    pattern: /NOT_RELATED_TO_FACTS/
};

export default createToken(NOT_RELATED_TO_FACTS);