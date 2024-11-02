import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false);
  const [fraseAtual, setFraseAtual] = useState("");

  const frases = [
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
  ];

  const mostraFrase = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setFraseAtual(frases[randomIndex]);
    setBiscoitoQuebrado(true);
  };

  const resetFrase = () => {
    setBiscoitoQuebrado(false);
    setFraseAtual("");
  };

  return (
    <View style={styles.container}>
      {!biscoitoQuebrado && <Text style={styles.texto}>Clique no biscoito</Text>}
      <TouchableOpacity onPress={mostraFrase} disabled={biscoitoQuebrado}>
        <Image
          source={
            biscoitoQuebrado
              ? require("./assets/cookie-images/cookie-quebrado.png")
              : require("./assets/cookie-images/cookie-inteiro.png")
          }
          style={styles.imagem}
        />
      </TouchableOpacity>
      {biscoitoQuebrado && <Text style={styles.texto}>{fraseAtual}</Text>}
      {biscoitoQuebrado && (
        <TouchableOpacity style={styles.botao} onPress={resetFrase}>
          <Text style={styles.textoBotao}>Quebrar outro biscoito</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 250,
    height: 250,
  },
  texto: {
    marginTop: 20,
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginHorizontal: 20,
  },
  botao: {
    marginTop: 20,
    backgroundColor: "#DD7B22",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 16,
  },
});
