const lampada = document.getElementById("lampada");

let lampadaQuebrada = false; // declarando que a variável "lampadaQuebrada" é bolenano

function lampadaAcesa () // criando a funçao "lampadaAcesa" 
{
   if (!lampadaQuebrada) // Se NÃO receber a variável lampada quebrada
   {
      lampada.src = "lampada-acesa.jpg";
   }
}
function lampadaDesligada() // criando a funçao "lampadaDesligada" 
{
   if (!lampadaQuebrada)
   {
      lampada.src = "lampada-apagada.jpg";
   }
}
function lampadaBroken () // criando a funçao "lampadaBroken" 
{
   lampada.src = "lampada-quebrada.jpg";
   lampadaQuebrada = true; // Declarando que a variável no final do código seja true para que após ser quebrada, não ligará novamente
}

lampada.addEventListener('mouseover', lampadaAcesa); // Quando o mouse estiver em cima da lampada irá mudar, a imagem da lampada apagada para a acesa. Esse comando é para a primeira função

lampada.addEventListener('mouseout', lampadaDesligada); // Quando o mouse sair de cima da imagem, ira mudar para a lampada apagada novamente. Esse comando é para a segunda função 

lampada.addEventListener('click', lampadaBroken); // Quando a lampada for clicada com o botão esquerdo, executará a terceira e última função