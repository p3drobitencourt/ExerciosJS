function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('fotodia');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`; 

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#e2cd9f';
        img.src = "/data/images/d0972b0134042754715af5d36c4948b7.jpg"; // Bom dia
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#b9846f';
        img.src = "/data/images/th (2).jpg"; // Boa tarde
    } else {
        document.body.style.background = '#515154';
        img.src = "/data/images/th.jpg"; // Boa noite
    }
}
