function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        res.innerHTML = `[ERRO] verifique os dados e tente novamente!`
        res.style.color = 'red'
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/homem-bebe.png')
            } else if (idade < 21) {
                // Jovem  
                img.setAttribute('src', 'imagens/homem-adolescente.png') 
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else if (fsex[1].cheked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/mulher-bebe.png')
            } else if (idade < 21) {
                // Jovem   
                img.setAttribute('src', 'imagens/mulher-adolescente.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}