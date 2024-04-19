import Nav from "./components/Nav";
// import { basic } from "../colors/colorCodes";

const root = { height: "100%", width: "100%" };
const header = {
  height: "7vh",
  // marginBottom: "12px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
};
const main = {
  //   backgroundColor: "beige",
  height: "93vh",
  margin: "6px 4px",
  padding: "6px 4px",
  // border: `1px solid ${basic.lightgray}`,
  borderRadius: "8px",
  // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default function Default(props: any) {
  const { children } = props;
  const isLandingPage = children[0].props.children[5].props.path === "/landing";

  const mainStyle = isLandingPage
    ? { ...main, margin: "0px 0px", padding: "0px 0px" }
    : main;

  return (
    <div style={root}>
      <header style={header}>
        <Nav />
      </header>
      <main style={mainStyle}>{children}</main>
    </div>
  );
}
