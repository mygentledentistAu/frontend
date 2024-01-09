import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ navigation, settings, footer, children }) {
  return (
    <div>
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer footer={footer} settings={settings} />
    </div>
  );
}
