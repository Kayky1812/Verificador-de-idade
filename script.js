function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let imag = document.createElement('img');
        imag.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'homem';

            if (idade >= 0 && idade < 10) {
                imag.setAttribute('src', 'meninobebe.png');
            } else if (idade < 21) {
                imag.setAttribute('src', 'jovemmenino.png');
            } else if (idade < 50) {
                imag.setAttribute('src', 'adulto.png');
            } else {
                imag.setAttribute('src', 'idosohomem.png');
            }
        } else if (fsex[1].checked) {
            genero = 'mulher';

            if (idade >= 0 && idade < 10) {
                imag.setAttribute('src', 'meninabebe.png');
            } else if (idade < 21) {
                imag.setAttribute('src', 'jovemmenina.png');
            } else if (idade < 50) {
                imag.setAttribute('src', 'mulher.png');
            } else {
                imag.setAttribute('src', 'idosa.png');
            }
        }

        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(imag);
    }
}
