import "../styles/Header.scss";
import Message from "./Message";
import TooltipWrapper from "./TooltipWrapper";

function Header() {
  return (
    <header>
      <ul>
        <TooltipWrapper position="bottom" content="🏡 is for everyone">
          <li>Home</li>
        </TooltipWrapper>
        <li>Our product</li>
        <TooltipWrapper position="bottom" content={Message}>
          <li>Who are we?</li>
        </TooltipWrapper>
        <li>Jobs</li>
        <TooltipWrapper
          position="bottom"
          content="Some content with veryveryverylong words inside"
        >
          <li>FAQ</li>
        </TooltipWrapper>
      </ul>
    </header>
  );
}

export default Header;
