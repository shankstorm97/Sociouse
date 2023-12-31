import Providers from "@/lib/utils/Providers";
import "./globals.css";
import Header from "@/components/Header";
import ThemeButton from "@/components/ThemeButton";
import TagSearch from "@/components/TagSearch";
import localFont from "next/font/local";

export const metadata = {
  title: "SociousE",
  description: "SociousE is a blog for young men finding direction",
};

const vanillaRavioli = localFont({
  src: "../fonts/VanillaRavioli.ttf",
});
const presicav = localFont({
  src: "../fonts/PresicavRg-Bold.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main>
          <Header />
          <TagSearch />
          <Providers>
            <div className={vanillaRavioli.className}>{children}</div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
