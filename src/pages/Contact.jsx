import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/");
  };

  return (
    <>
      <Header></Header>
      <h1 className="text-center">Contact</h1>
      <div className="container d-flex align-items-center">
        <form onSubmit={handleSubmit} className="container align-items-center d-flex flex-column">
        <div>
          <label className="me-3 form-label">Nombre: </label>
          <input name="nombre" className="form-control" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Correo: </label>
          <input name="correo" className="form-control" value={form.correo} onChange={handleChange} />
        </div>
        <div>
          <label>Mensaje: </label>
          <textarea className="form-control"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Enviar</button>
      </form>
      </div>
      
    </>
  );
}

export default Contact;
