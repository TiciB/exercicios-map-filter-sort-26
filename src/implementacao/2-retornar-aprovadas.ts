import { retornarMedias } from "./1-retornar-medias";

function retornarAprovadas() {
    let alunasAprovadas = retornarMedias().filter((aluna: any) => aluna.media >= 7);
    return alunasAprovadas;
}

console.log(retornarAprovadas());
