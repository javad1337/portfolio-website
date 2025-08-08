import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Javad Khalilov',
	description:
		'Welcome to my portfolio! I am a passionate mobile developer crafting beautiful and performant apps for iOS and Android. Specializing in native and cross-platform development, I create engaging mobile experiences that users love.',
	keywords: [
		'Mobile Developer',
		'iOS Developer',
		'Android Developer',
		'React Native',
		'Flutter',
		'Swift',
		'Kotlin',
		'Mobile Apps',
		'Cross-Platform Development',
		'Native Development',
		'Mobile UI/UX',
		'App Store',
		'Play Store',
		'Mobile Architecture',
		'Javad Khalilov',
	],
	authors: [{ name: 'Javad Khalilov' }],
	creator: 'Javad Khalilov',
	openGraph: {
		title: 'Javad Khalilov',
		description: 'Passionate mobile developer creating exceptional iOS and Android applications. Explore my projects and app development expertise.',
		url: 'https://javadkhalilov.com',
		siteName: 'Javad Khalilov',
		images: [
			{
				url: 'https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_J_red-512.png',
				width: 1200,
				height: 630,
				alt: 'Javad Khalilov',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Javad Khalilov - Mobile Developer',
		description: 'Passionate mobile developer creating exceptional iOS and Android applications. Explore my projects and app development expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
