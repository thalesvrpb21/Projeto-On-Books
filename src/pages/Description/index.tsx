import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";

export function Description() {
  const { item } = useContext(DashContext);

  return (
    <>
      <header></header>
      <main>
        <button>Já li</button>
        <button>Desejo ler</button>
      </main>
    </>
  );
}
