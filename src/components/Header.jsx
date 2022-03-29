import { useState } from "react";
import Message from "./Message";
import Tooltip from "./Tooltip";
import "../styles/Header.scss";

function Header() {
  const [position, setPosition] = useState("bottom");

  const handleChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <>
      <article>
        <p>
          This header component demonstrates use of a controlled tooltip: 4
          positions are available, passed as parameters to the tooltip
          component.
        </p>
        <p>Go ahead and play with the position!</p>
        <p>
          As you'll see, this version does not guarantee tooltip visibility in
          viewport.
        </p>
      </article>
      <form>
        <input
          type="radio"
          id="top"
          value="top"
          name="position"
          onChange={handleChange}
        />
        <label htmlFor="top">⬆️</label>

        <input
          type="radio"
          id="bottom"
          value="bottom"
          name="position"
          onChange={handleChange}
        />
        <label htmlFor="bottom">⬇️</label>

        <input
          type="radio"
          id="left"
          value="left"
          name="position"
          onChange={handleChange}
        />
        <label htmlFor="left">⬅️</label>

        <input
          type="radio"
          id="right"
          value="right"
          name="position"
          onChange={handleChange}
        />
        <label htmlFor="right">➡️</label>
        <p>Position: {position}</p>
      </form>
      <header>
        <ul>
          <li>Home</li>
          <li>
            Our product
            <Tooltip position={position}>🏡 is for everyone</Tooltip>
          </li>
          <li>
            Who are we?
            <Tooltip position={position}>
              <Message />
            </Tooltip>
          </li>
          <li>Jobs</li>
          <li>
            FAQ
            <Tooltip position={position}>
              Some content with veryveryverylong words inside
            </Tooltip>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
