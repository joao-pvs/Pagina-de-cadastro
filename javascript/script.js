   
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
               <td>${dados[0].nome}</td>
               <td>${dados[0].dataNascimento}</td>
               <td>${dados[0].vinculo}</td>
               <td>${dados[0].turma}</td>
               <td>${dados[0].endereco}</td>
               <td>${dados[0].cep}</td>
               <td>${dados[0].logradouro}</td>
               <td>${dados[0].numero}</td>
               <td>${dados[0].complemento}</td>
               <td>${dados[0].bairro}</td>
               <td>${dados[0].cidade}</td>
               <td>${dados[0].uf}</td>
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

   
   