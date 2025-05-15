// import { type } from "../../listaPreConstruida";
import { turma } from "../../listaPreConstruida";

export function retornarMedias():{}[]{
    let mediasDasAlunas: any = turma.map((aluna) => {
        // (a + b + c) / 3
        let somaDasNotas = aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3;
        let media: number = somaDasNotas / 3;

        return {
            nome: aluna.nome,
            // media: media.toFixed(1)
            media: Number(media.toFixed(1))
        }
    })
    return mediasDasAlunas;
}

console.log(turma);
console.log(retornarMedias());