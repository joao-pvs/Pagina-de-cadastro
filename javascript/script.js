   
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

      const tabela = document.querySelector('#tabelaDados');
      tabela.innerHTML = ''; // Limpa o conteúdo antes de preencher para evitar duplicatas

      dadosCadastrados.forEach(dado => {
      console.log(dado);
      tabela.innerHTML += `
         <p>${dado[0].nome}</p>
         <p>${dado[0].nascimento}</p>
         <p>${dado[0].vinculo}</p>
         <p>${dado[0].turma}</p>
         <p>${dado[0].CEP}</p>
      `;
      });
   }

   function limparCadastro(){
      dado = document.querySelectorAll('input');

      dado.forEach(campo => {
         campo.value = '';
      });
   }

   
   popularTabela();