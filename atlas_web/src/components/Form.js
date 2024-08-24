import "./form.css";
import { sendPOST, checkEmail } from "../API/comunication";

// Função pra alterar o evento padrão do Form e eu conseguir enviar os dados
function buildInfo(event) {
  event.preventDefault();
  const formData = new FormData(document.getElementById("form"));
  const userJSON = Object.fromEntries(formData);

  // A função de check validation retorna uma Promise
  const validation = checkEmail(userJSON.email);
  validation.then((result) => {
    // Aqui tenho 3 caminhos a seguir:
    // 1. Valor é 0 = Posso criar
    // 2. Valor >0 = Mensagem de email utilizado
    // 3. Valor é Exception = Popup de Erro
    console.log(result);
    if (result == 0) {
      // sendPOST retorna uma Promise, com base nela decido o que fazer na Tela
      const response = sendPOST(userJSON);
      response.then((data) => {
        console.log(`THE RESPONSE CODE IS ${data}...`);
      });
    } else if (result == 1) {
      // Caso já estejam usando o e-mail
      console.log("Usuário já cadastrado");
    } else {
      // Popup de erro por causa do status code
      console.log("Deu zika pae kkkk");
    }
  });

  // Conferindo como prosseguir com base no checkEmail
}

function Form() {
  return (
    <>
      {/* Aprendi que o Form envia no padrão pra API receber já, só identificar os inputs com o 'name'*/}
      <form id="form" onSubmit={buildInfo}>
        <input type="text" name="name" required></input>
        <input type="email" name="email" required></input>
        <input type="password" name="password" required></input>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </>
  );
}

export default Form;
