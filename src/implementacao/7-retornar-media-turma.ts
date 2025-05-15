import { retornarMedias } from "./1-retornar-medias";
type Aluna = {
  nome: string;
  media: number;
};
function retornarMediaTurma(): number {
    const alunas: Aluna[] = retornarMedias();

    const somaDasMedias = alunas.reduce((total, aluna) => total + aluna.media, 0);
    const mediaTurma = somaDasMedias / alunas.length;

    return mediaTurma;
}

console.log("Média da turma:", retornarMediaTurma().toFixed(1));