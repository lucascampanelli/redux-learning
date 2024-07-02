import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { definirContador, incrementarContador, reduzirContador } from "./reducers/counter";



export default function App() {

  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.count)

  return (
    <div>
      <h1>Bem-vindo ao contador!</h1>

      <h2>O contador está com o valor de: {counter}</h2>

      <p>
        <button onClick={() => dispatch(incrementarContador())}>INCREMENTAR</button>
      </p>

      <p>
        <button onClick={() => dispatch(reduzirContador())}>REDUZIR</button>
      </p>

      <p>
        <button onClick={() => dispatch(definirContador(2024))}>DEFINIR COMO 2024</button>
      </p>
    </div>
  );
}