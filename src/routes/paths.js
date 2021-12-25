import Home from "../containers/Home";
import Pokemon from "../containers/Pokemon"
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:pokemonId",
    element: <Pokemon />,
  },
]
