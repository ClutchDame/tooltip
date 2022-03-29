import Message from "./Message";
import Tooltip from "./Tooltip";
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
          <li>Home</li>
          <li>
            Our product
            <Tooltip>🏡 is for everyone</Tooltip>
          </li>
          <li>
            Who are we?
            <Tooltip>
              <Message />
            </Tooltip>
          </li>
          <li>Jobs</li>
          <li>
            FAQ
            <Tooltip>Some content with veryveryverylong words inside</Tooltip>
          </li>
        </ul>
      </header>
      <header style={{ marginTop: "auto" }}>
        <ul>
          <li>
            Home
            <Tooltip>Some content with veryveryverylong words inside</Tooltip>
          </li>
          <li>Our product</li>
          <li>
            Who are we?
            <Tooltip>
              <Message />
            </Tooltip>
          </li>
          <li>Jobs</li>
          <li>
            FAQ
            <Tooltip>Frequently asked questions</Tooltip>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
