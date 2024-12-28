import { ScrollView, SafeAreaView } from "react-native";
import Greetings from "../../components/home/Greetings";
import Wrapper from "../../components/home/Wrapper";
import BreedingCard from "../../components/sites/SiteTile";

export default function HomePage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }} // Adjust paddingBottom if needed
        showsVerticalScrollIndicator={false}
      >
        <Wrapper />
      </ScrollView>
    </SafeAreaView>
  );
}
