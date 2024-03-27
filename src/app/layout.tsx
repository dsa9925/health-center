import type { Metadata } from 'next';
import '@/styles/globals.css';
export const metadata: Metadata = {
  title: '전국 보건소 위치 안내',
  description: '전국 보건소 위치 안내 서비스 앱',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="b9f76115609d4cbcef92a69b26590aecec2984c4"
        />
        <link
          rel="canonical"
          href="https://health-center-rose.vercel.app"
        ></link>
        <meta
          name="google-site-verification"
          content="LftvpRZFaPLaPPbKky-p2vIjFlp4tueQUiiXY5Jtdw8"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
