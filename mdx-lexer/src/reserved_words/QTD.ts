import { ITokenConfig , createToken } from "chevrotain";

const QTD: ITokenConfig = {
    label: "QTD key word",
    name: "qtd",
    pattern: /QTD/
};

export default createToken(QTD);