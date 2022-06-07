function criarMatriz(){
    let i = document.getElementById("linhas").value;
    let j = document.getElementById("colunas").value;

    if (i != j){
        window.alert("Não é posivel resolver essa equação!");  
    }else if (i == j){
        console.log("1");
        
    }   
}









/*
<section>
            <br><br>
            <div id="matrizes">
                <label>{</label>
                <input type="number" id="colunas" name="colunas" placeholder="a11" maxlength="3">
                <input type="number" id="colunas" name="colunas" placeholder="a12" maxlength="3">
                <input type="number" id="colunas" name="colunas" placeholder="a13" maxlength="2">
                <label>}</label>
                <br><br>
                <label>{</label>
                <input type="number" id="colunas" name="colunas" placeholder="a21" maxlength="3">
                <input type="number" id="colunas" name="colunas" placeholder="a22" maxlength="3">
                <input type="number" id="colunas" name="colunas" placeholder="a23" maxlength="3">
                <label>}</label>
                <br><br>
                <label>{</label>
                <input type="number" id="colunas" name="colunas" placeholder="a31" maxlength="3">
                <input type="number" id="colunas" name="colunas" placeholder="a32" maxlength="3">
                <input type="number" id="colunas" name="colunas" placeholder="a33" maxlength="3">
                <label>}</label>
            </div>
            <h2>+</h2>
            <div id="matrizes">

            </div>

        </section>
*/