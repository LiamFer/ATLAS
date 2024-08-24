import "./form.css";
import {sendPOST,checkEmail} from "../API/comunication";

// Função pra alterar o evento padrão do Form e eu conseguir enviar os dados
function buildInfo(event) {
  event.preventDefault();
  const formData = new FormData(document.getElementById("form"));
  const userJSON = Object.fromEntries(formData);
  const validation = true;
  if (validation) {
    // sendPOST retorna uma Promise, com base nela decido o que fazer na Tela
    const response = sendPOST(userJSON);
    response.then((data) => {
      console.log(`THE RESPONSE CODE IS ${data}...`);
    });
  }
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
