import { Route, Switch, Router as WouterRouter } from "wouter";
import { ThemeProvider } from "next-themes";
import { Layout } from "@/components/Layout";

import Home from "@/pages/Home";
import Publications from "@/pages/Publications";
import Research from "@/pages/Research";
import Teaching from "@/pages/Teaching";
import Vignettes from "@/pages/Vignettes";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/publications" component={Publications} />
        <Route path="/research" component={Research} />
        <Route path="/teaching" component={Teaching} />
        <Route path="/vignettes" component={Vignettes} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <AppRouter />
      </WouterRouter>
    </ThemeProvider>
  );
}

export default App;
