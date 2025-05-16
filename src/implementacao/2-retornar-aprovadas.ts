import { retornarMedias } from "./1-retornar-medias";

function retornarAprovadas(): {nome: string, media: number}[] {
    let alunasAprovadas = retornarMedias().filter((aluna: any) => aluna.media >= 7);
    return alunasAprovadas;
}

console.log(retornarAprovadas());
