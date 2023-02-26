import "./index.css";

import Image from "../../../../assets/tema.png";

const ModalTheme = () => {
  return (
    <div className="content-all">
      <div className="content-info ">
        <div className="content-image">
          <img src={Image} />
        </div>
      </div>
    </div>
  );
};

export { ModalTheme };
