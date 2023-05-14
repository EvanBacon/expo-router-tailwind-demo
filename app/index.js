import { Link } from "expo-router";
import { ScrollView, Image, Text, View } from "react-native";

export default function TeamSection() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <View className="text-center pb-12">
          <Text className="text-base font-bold text-indigo-600">
            We have the best styling in the market
          </Text>
          <Text className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members!
          </Text>
        </View>
        <View className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First team member */}
          <TeamMate
            name="Evan Bacon"
            role="Software Engineer"
            img="https://github.com/evanbacon.png"
          />
          <TeamMate
            name="Lydia Hallie"
            role="Technical Writer"
            img="https://github.com/lydiahallie.png"
          />
        </View>
        {/* GitHub Link */}
        <View className="text-center pt-12">
          <Link
            className="text-base font-bold text-indigo-600"
            href="https://github.com/evanbacon/expo-router-tailwind-demo"
          >
            View on GitHub
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

function TeamMate({ img, name, role }) {
  return (
    <View className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <View className="w-full md:w-2/5 h-80">
        <Image
          className="object-center object-cover w-full h-full"
          source={{ uri: img }}
          accessibilityLabel="photo"
        />
      </View>
      <View className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
        <Text className="text-xl text-gray-700 font-bold">{name}</Text>
        <Text className="text-base text-gray-400 font-normal">{role}</Text>
        <Text className="text-base leading-relaxed text-gray-500 font-normal">
          Lor ipsumtamet, consectetur adipiscing elit, sed do eiusmod te
        </Text>
        <View className="flex justify-start space-x-2">
          {/* Social media icons */}
          {/* ... */}
        </View>
      </View>
    </View>
  );
}
