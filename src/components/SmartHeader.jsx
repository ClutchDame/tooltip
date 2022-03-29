import Message from "./Message";
import TooltipWrapper from "./TooltipWrapper";
import "../styles/Header.scss";

function Header() {
  return (
    <>
      <article>
        <p>
          This identical component illustrates how tooltips work with smart
          positioning.
        </p>
        <p>
          The tooltip chooses where to display, depending on the space left
          between its parent and the viewport.
        </p>
      </article>
      <header>
        <ul>
          <TooltipWrapper content="🏡 is for everyone">
            <li>Home</li>
          </TooltipWrapper>
          <li>Our product</li>
          <TooltipWrapper content={Message}>
            <li>Who are we?</li>
          </TooltipWrapper>
          <li>Jobs</li>
          <TooltipWrapper content="Some content with veryveryverylong words inside">
            <li>FAQ</li>
          </TooltipWrapper>
        </ul>
      </header>
      <header style={{ marginTop: "auto" }}>
        <ul>
          <TooltipWrapper content="Some content with veryveryverylong words inside">
            <li>Home</li>
          </TooltipWrapper>
          <li>Our product</li>
          <TooltipWrapper content={Message}>
            <li>Who are we?</li>
          </TooltipWrapper>
          <li>Jobs</li>
          <TooltipWrapper content="Frequently asked questions">
            <li>FAQ</li>
          </TooltipWrapper>
        </ul>
      </header>
    </>
  );
}

export default Header;
