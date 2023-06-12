import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ navigation, settings, footer, children }) {
  return (
    <div className="text-slate-700">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer footer={footer} settings={settings} />
    </div>
  );
}
