import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [display, setDisplay] = useState("");
  const [primeiroNumero, setPrimeiroNumero] = useState("");
  const [operacao, setOperacao] = useState("");

  function adicionarNumero(numero: string) {
    setDisplay(display + numero);
  }

  function limpar() {
    setDisplay("");
    setPrimeiroNumero("");
    setOperacao("");
  }

  function escolherOperacao(op: string) {
    setPrimeiroNumero(display);
    setOperacao(op);
    setDisplay("");
  }

function calcular() {
const n1 = Number(primeiroNumero);
const n2 = Number(display);

if (operacao === "+") {
  setDisplay((n1 + n2).toString());
}
}

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display || "0"}</Text>

      <View style={styles.linha}>
        <Botao texto="7" onPress={() => adicionarNumero("7")} />

          <Botao texto="8" onPress={() => adicionarNumero("8")} />

          <Botao texto="9" onPress={() => adicionarNumero("9")} />

          <Botao texto="+" onPress={() => escolherOperacao("+")} />
      </View>

      <View style={styles.linha}>
        <Botao texto="4" onPress={() => adicionarNumero("4")} />

          <Botao texto="5" onPress={() => adicionarNumero("5")} />

          <Botao texto="6" onPress={() => adicionarNumero("6")} />

          <Botao texto="=" onPress={calcular} />
      </View>

      <View style={styles.linha}>
        <Botao texto="1" onPress={() => adicionarNumero("1")} />

          <Botao texto="2" onPress={() => adicionarNumero("2")} />

          <Botao texto="3" onPress={() => adicionarNumero("3")} />

          <Botao texto="C" onPress={limpar} />
      </View>

      <View style={styles.linha}>
        <Botao texto="0" onPress={() => adicionarNumero("0")} />
      </View>
    </View>
  );
}

function Botao({ texto, onPress }: any) { return (
  <TouchableOpacity style={styles.botao} onPress={onPress}>
    <Text style={styles.textoBotao}>{texto}</Text>
  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  display: {
    fontSize: 40,
    textAlign: "right",
    marginBottom: 20,
  },
  linha:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#ddd",
    flex: 1,
    margin: 5,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  textoBotao: {
    fontSize: 24,
  },
});
