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

function closeForm(){
    document.getElementById("formbox").remove()
}

function Form() {
  return (
    <>
      {/* Aprendi que o Form envia no padrão pra API receber já, só identificar os inputs com o 'name'*/}

        <form
          id="form"
          onSubmit={buildInfo}
          className="slide-in-blurred-bottom"
        >
          <div id="form_imagebox"></div>
          <div id="formfields">
            <h2>create account</h2>
            {/* Lembrei q o for do Label referencia o ID de um input */}
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
              <label for="name" className="form__label">
                Name
              </label>
            </div>

            <div className="form__group field">
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
              <label for="email" className="form__label">
                Email
              </label>
            </div>

            <div className="form__group field">
              <input
                type="password"
                className="form__field"
                placeholder="Password"
                name="password"
                id="password"
                required
              />
              <label for="password" className="form__label">
                Password
              </label>
            </div>
            <p>*ERRO email já cadastrado</p>
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="closeform"
              onClick={closeForm}
            >
              <path
                d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                fill-rule="nonzero"
              />
            </svg>
            <input
              className="submitbtn button-green"
              type="submit"
              value="Cadastrar"
            ></input>
          </div>
        </form>
    </>
  );
}

export default Form;
