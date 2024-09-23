import { ImageBackground, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { styles } from './styles';
import { Flight } from '@/components/flight';
import { colors } from '@/styles/color';

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.header}
        source={require("@/assets/cover.png")}>
            <Text style={styles.title}>Cartão de embarque</Text>
            <Text style={styles.subtitle}>Faltam 45 dias para a sua viagem</Text>
      </ImageBackground>
      <View style={styles.ticket}>
        <View style={styles.content}>
            <View style={styles.flight}>
                <Flight label='São Paulo' value='GRU' />
                <View style={styles.duration}>
                    <Ionicons name='airplane-sharp' size={32} color={colors.black} />
                    <Text style={styles.hours}>9 h 45 min</Text>
                </View>
                <Flight label='Nova York' value='JFK' />
            </View>
            <Text style={styles.label}>Passageiro</Text>
            <Text style={styles.name}>Juliherms Vasconcelos</Text>
        </View>
      </View> 
    </View>
  );
}

