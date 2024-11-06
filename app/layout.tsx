import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Prefecture-Population SPA",
  description: "このアプリケーションは、都道府県別の総人口を折れ線グラフで表示するシングルページアプリケーション(SPA)です。\nユーザーが複数の都道府県を選択すると、それぞれの人口データが同一グラフ上に表示され、比較が可能です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
