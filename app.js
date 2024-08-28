function encriptar() {
    const entrada = document.getElementById('Entrada').value;
    const notexto = document.getElementById('notexto');
    const textoencriptado = document.getElementById('textoencriptado');

    if (entrada === "") {
        notexto.style.display = 'flex';
        textoencriptado.style.display = 'none';
    } else {
        notexto.style.display = 'none';
        textoencriptado.style.display = 'flex';
        document.getElementById('copiar').style.display="flex"
        const patrones = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };
        const textoEncriptado = entrada.replace(/[aeiou]/g, (letra) => patrones[letra]);
        textoencriptado.textContent = textoEncriptado;
    }
    
}

function desencriptar() {
    const entrada = document.getElementById('Entrada').value;
    const notexto = document.getElementById('notexto');
    const textoencriptado = document.getElementById('textoencriptado');

    if (entrada === "") {
        notexto.style.display = 'flex';
        textoencriptado.style.display = 'none';
    } else {
        notexto.style.display = 'none';
        textoencriptado.style.display = 'flex';
        document.getElementById('copiar').style.display="flex"
        const patronesInvertidos = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        let textoDesencriptado = entrada;
        for (const [patron, letra] of Object.entries(patronesInvertidos)) {
            textoDesencriptado = textoDesencriptado.split(patron).join(letra);
        }

        textoencriptado.textContent = textoDesencriptado;
    }
        
}

function copiartexto(){
    const texto = document.getElementById('textoencriptado').textContent;
        navigator.clipboard.writeText(texto).then(() => {
            alert("Copiado en tu portapapeles :)");
        })
}    