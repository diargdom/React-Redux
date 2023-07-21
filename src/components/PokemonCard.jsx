import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./PokemonList.css";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name, image }) => {
  //const allAbilities = abilities.map(ability => ability.ability.name).join(', ')
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};
export default PokemonCard;
