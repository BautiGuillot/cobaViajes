import { useEffect, useState } from "react";

export default function PaqueteDetalle({ apiUrl, dominio }) {
  const [paquete, setPaquete] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  useEffect(() => {
    const d = dominio || window.location.hostname;
    fetch(`${apiUrl}/api/public/paquetes/dominio/${d}/paquete/${id}`)
      .then((res) => res.json())
      .then((data) => setPaquete(data));
  }, [apiUrl, dominio, id]);

  if (!paquete) return <p>Cargando...</p>;

  return (
    <article>
      <h1>{paquete.titulo}</h1>
      <p>{paquete.descripcion}</p>
      <strong>${paquete.precio}</strong>
      <br />
      <a href="/">← Volver</a>
    </article>
  );
}
