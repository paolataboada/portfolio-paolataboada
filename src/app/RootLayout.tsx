import Header from "@/components/Header";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

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
