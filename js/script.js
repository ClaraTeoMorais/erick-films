document.getElementById('fechar_menu').addEventListener('click',janela);
function janela(){
    document.getElementById('caixa_menu').style.visibility='hidden';
}

document.getElementById('abrir_menu').addEventListener('click', caixa)
function caixa(){
    document.getElementById('caixa_menu').style.visibility='visible'
}