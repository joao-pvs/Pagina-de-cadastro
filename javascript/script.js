   
   function cadastrarPessoa(){
    alert( document.querySelector('#nome').value);

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


   const dadosSalvos = JSON.parse(localStorage.getItem('cadastros')) || [];
   dadosSalvos.push(dados);
   localStorage.setItem('cadastros', JSON.stringify(dadosSalvos));

   popularTabela();
   
   }

    function popularTabela(){
       var dadosCadastrados = JSON.parse(localStorage.getItem('cadastros'));
      console.log('Esses sao os dados:', dadosCadastrados);

      const tabela = document.querySelector('.tabelaDados');
      tabela.innerHTML = ''; 

      dadosCadastrados.forEach(dado => {
      console.log(dado);
      tabela.insertAdjacentHTML('beforeend',
         `
         <tr>
               <td>${dado[0].nome}</td>
               <td>${dado[0].dataNascimento}</td>
               <td>${dado[0].vinculo}</td>
               <td>${dado[0].turma}</td>
               <td>${dado[0].endereco}</td>
               <td>${dado[0].cep}</td>
               <td>${dado[0].logradouro}</td>
               <td>${dado[0].numero}</td>
               <td>${dado[0].complemento}</td>
               <td>${dado[0].bairro}</td>
               <td>${dado[0].cidade}</td>
               <td>${dado[0].uf}</td>
          </tr>
         `
      )
      });
   }

   function limparCadastro(){
      dado = document.querySelectorAll('input');

      dado.forEach(campo => {
         campo.value = '';
      });
   }

   
   // Buscar endereço pelo CEP
document.querySelector('#numeroCEP').addEventListener('blur', buscarCEP);

async function buscarCEP() {

var cep = document.querySelector('#numeroCEP').value;

cep = cep.replace(/\D/g, '');

if (cep.length !== 8) {
    return;
}

try {

    const resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json/');

    const dados = await resposta.json();

    if (dados.erro) {
        alert('CEP não encontrado!');
        return;
    }

    document.querySelector('#logradouro').value = dados.logradouro;
    document.querySelector('#bairro').value = dados.bairro;
    document.querySelector('#cidade').value = dados.localidade;
    document.querySelector('#UF').value = dados.uf;
    document.querySelector('#complemento').value = dados.complemento;

} catch (erro) {

    alert('CEP não encontrado. Tente novamente.');

}
}

   
   
