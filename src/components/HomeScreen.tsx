import { View, Image } from "react-native";
import { Container, Header, InputBar } from "./styles";
import Logo from "../../assets/icon-menu.svg";
import Cart from "../../assets/cart.svg";

export const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <View>
          <Logo width={46} height={46} />
        </View>
        <View>
          <Cart width={46} height={46} />
        </View>
      </Header>

      <InputBar></InputBar>
    </Container>
  );
};
