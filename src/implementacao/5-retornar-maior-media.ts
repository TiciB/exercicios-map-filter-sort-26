import { retornarMedias } from "./1-retornar-medias";

function retornarMaiorMedia(): {nome: string, media: number} {
    let mediasNaOrdem = retornarMedias().sort((a, b) => a.media - b.media);
    let maiorMedia = mediasNaOrdem[mediasNaOrdem.length - 1];
    return maiorMedia;
}

console.log(retornarMaiorMedia());
