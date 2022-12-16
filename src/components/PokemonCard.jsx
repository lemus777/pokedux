import { Card } from "antd";
import { useDispatch } from "react-redux";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";
import './PokemonList.css';

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map(elem => elem.type.name).join(', '); // usa types que viene de PokemonList para mostrarnos los elementos del pokemon

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }

  return (
    <Card 
      title={name} 
      cover={<img src={image} alt={name} />} 
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;