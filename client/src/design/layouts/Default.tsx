import Nav from "./components/Nav";
// import { basic } from "../colors/colorCodes";

export default function Default(props: any) {
  const { children } = props;
  const pathName = window.location.pathname;
  const isLandingPage = pathName === "/landing";

  const mainStyle = isLandingPage ? { ...main, padding: "0px 0px" } : main;

  return (
    <div style={root}>
      <header style={header}>
        <Nav />
      </header>
      <main style={mainStyle}>{children}</main>
    </div>
  );
}

const root = { height: "100%", width: "100%" };
const header = {
  height: "7vh",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
};
const main = {
  //   backgroundColor: "beige",
  height: "93vh",
  padding: "4px 4px",
  // border: `1px solid ${basic.lightgray}`,
  borderRadius: "8px",
  // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};
