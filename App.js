
import RouteApp from './routes/RouteApp';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Kanit: require('./assets/fonts/Kanit/Kanit-Black.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <RouteApp />
  );
}
