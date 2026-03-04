import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    const n1 = Number(numero1);
    const n2 = Number(numero2);

    if (operacao === "+") {
      setResultado((n1 + n2).toString());
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Calculadora</Text>

      <Text>Primeiro Número:</Text>
      <TouchableOpacity style={styles.botao} onPress={() => setNumero1(numero1 + "1")}>
        <Text>Adicionar 1</Text>
      </TouchableOpacity>
      <Text>{numero1}</Text>

      <Text>Segundo Número:</Text>
      <TouchableOpacity style={styles.botao} onPress={() => setNumero2(numero2 + "1")}>
        <Text>Adicionar 1</Text>
      </TouchableOpacity>
      <Text>{numero2}</Text>

      <TouchableOpacity style={styles.botao} onPress={() => setOperacao("+")}>
        <Text>Somar (+)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text>=</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#ddd",
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  resultado: {
    fontSize: 20,
    marginTop: 20,
  },
});
