import Header from "@/components/Header";
import { inter } from "./layout";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<Header></Header>
				{children}
			</body>
		</html>
	);
}
