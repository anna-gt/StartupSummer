import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css"

export default function App() {
  return <MantineProvider theme={theme}>
			<Navbar />
	</MantineProvider>;
}
