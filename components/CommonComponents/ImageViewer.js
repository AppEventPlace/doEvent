import { StyleSheet, Image } from "react-native";

//Crear funcion para aplicar estilo a una imagen
export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
  ancho,
  alto,
}) {
  /*Si la imagen seleccionada no es nula, muestre la imagen desde el dispositivo,
  de lo contrario, muestre la imagen del marcador de posición.*/
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return (
    // <Image source={placeholderImageSource} style={styles.imagen} />
    <Image
      source={imageSource}
      style={[styles.imagen, { width: ancho, height: alto }]}
    />
  );
}

const styles = StyleSheet.create({
  //Propiedades de la imagen
  imagen: {
    //width: 96,         // Ancho de a imagen
    //height: 96,        // Alto de la imagen
    borderRadius: 96 / 2, // Estilo de borde curbo
  },
});
