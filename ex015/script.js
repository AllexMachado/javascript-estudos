
function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#f1dbb0'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#fc8e00'
    } else {
        // Boa Noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#0A2340'
    }
}