   
   function cadastrarPessoa(){
    alert( document.querySelector('#nome').value)
    var dados = [
       {
         'nome' : document.querySelector('#nome').value,
         'nascimento': document.querySelector('#nascimento').value,
         'vinculo' : document.querySelector('#vinculo').value,
         'turma' : document.querySelector('#turma').value,
         'CEP' : document.querySelector('#numeroCEP').value,
         'Logradouro' : document.querySelector('#logradouro').value,
         'Número' : document.querySelector('#numerocasa').value,
         'Complemento' : document.querySelector('#complemento').value,
         'Bairro' : document.querySelector('#bairro').value,
         'Cidade' : document.querySelector('#cidade').value,
         'UF' : document.querySelector('#UF').value,
       }
    ]
    console.log(dados);
   }

