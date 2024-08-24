import "./form.css";

function Form() {
  return (
    <>
      <form action="http://localhost:8090/api/readers" method="POST">
        <input type="text" name="name"></input>
        <input type="text" name="email"></input>
        <input type="password" name="password"></input>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </>
  );
}

export default Form;
