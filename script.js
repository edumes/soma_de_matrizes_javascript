function checarMatriz(){
    let i = document.getElementById("linhas").onclick;
    let j = document.getElementById("colunas").onclick;

    if (i != j) {
        window.alert("Não é posivel resolver essa equação!");
    }
}