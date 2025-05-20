import { turma } from "../../listaPreConstruida";

type Resultado = {
  nome: string;
  media: number;
  aprovada: boolean;
};

function retornarObjetos(): Resultado[] {
  return turma.map(aluna => {
    const { p1, p2, p3 } = aluna.prova;
    const media = (p1 + p2 + p3) / 3;

    return {
      nome: aluna.nome,
      media: parseFloat(media.toFixed(1)),
      aprovada: media >= 7
    };
  });
}
console.log(retornarObjetos())