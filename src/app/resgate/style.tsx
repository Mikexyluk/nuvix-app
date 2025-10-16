import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c2241ff",
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: "center",
  },
  containerImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#222", // fallback background
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    color: "#ccc",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 25,
  },
  containerTotal: {
    width: "100%",
    backgroundColor: "#1d1d1dff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
  },
  subtitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  detalhes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  textoNormal: {
    color: "#fff",
  },
  textoFade: {
    color: "#dfdfdfff",
  },
  textoDesconto: {
    color: "#019EC2",
  },
  textoBold: {
    color: "#fff",
    fontWeight: "bold",
  },
  textoPreco: {
    color: "#019EC2",
    fontWeight: "bold",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#00618A",
    paddingTop: 10,
  },
  botaoResgate: {
    width: "100%",
    backgroundColor: "#019EC2",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  containerChave: {
    backgroundColor: "#2a2f55",
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    width: "100%",
  },
  textoChave: {
    color: "#bbb",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
  },
  chave: {
    color: "#7CFC00",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
