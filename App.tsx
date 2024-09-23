import { Home } from "@/app/home";
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_800ExtraBold, useFonts } from "@expo-google-fonts/poppins";

export default function App() {

  // carrega as fontes
  const [fontsLoaded] = useFonts ({
    useFonts,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_800ExtraBold,
  })

  // verifica o carregamento da fonte
  if(!fontsLoaded) {
   // return null
  }

  return <Home />

}