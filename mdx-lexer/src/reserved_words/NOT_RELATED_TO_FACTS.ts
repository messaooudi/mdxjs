import { ITokenConfig } from "chevrotain"

const NOT_RELATED_TO_FACTS: ITokenConfig = {
    label: "NOT_RELATED_TO_FACTS key word",
    name: "not related to facts",
    pattern: /NOT_RELATED_TO_FACTS/
};

export default createToken(NOT_RELATED_TO_FACTS);