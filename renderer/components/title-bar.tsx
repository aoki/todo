import { FC } from "react";

interface TitleBarProps {
  title?: string;
}

const TitleBar: FC<TitleBarProps> = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
      <style jsx>{`
        p {
          margin: 0px;
          margin-left: 80px;
          font-size: 0.9rem;
        }
        div {
          -webkit-app-region: drag;
          min-height: 24px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default TitleBar;
