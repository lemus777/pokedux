import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ name }) => {
  return (
    <Card 
      title={name} 
      cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto" />} 
      extra={<StarOutlined />}
    >
      <Meta description='fire, magic'/>
    </Card>
  );
};

export default PokemonCard;