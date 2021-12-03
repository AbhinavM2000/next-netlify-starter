export default function MyComponent(props) {
  return (
    <>
      <div className="div">
        <p>
          <strong>
            <em>Curriculum vitae</em>
          </strong>
          <span class="ql-cursor">﻿</span>
        </p>
      </div>
      <div className="div-2" maxWidth={1200}>
        <section className="section">
          <p>
            <b>
              I am a section! My content keeps from getting too wide, so that
              it's easy to read even on big screens.
            </b>
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>{" "}
        </section>
      </div>{" "}
      <div className="div-3" maxWidth={1200}>
        <section className="section">
          {" "}
          <p>
            <strong>
              I am a section! My content keeps from getting too wide, so that
              it's easy to read even on big screens.
            </strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </section>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: auto;
          padding-top: 0px;
          background-color: rgba(147, 155, 147, 1);
          opacity: 1;
          font-family: "sans-serif", sans-serif;
          padding-bottom: 30px;
          margin-bottom: -2px;
          margin-left: 150px;
          margin-right: 150px;
          padding-left: px;
          line-height: normal;
          text-align: center;
          color: rgba(255, 255, 255, 1);
        }
        @media (max-width: 991px) {
          .div {
            display: flex;
            flex-direction: row;
            overflow: auto;
            background-color: rgba(224, 201, 166, 1);
            padding-bottom: px;
            margin-top: 0px;
            width: 100vw;
            align-self: stretch;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .div-2 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 0px;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 50px;
          padding-bottom: 50px;
          margin-left: 150px;
          background-color: rgba(251, 251, 248, 1);
          margin-right: 150px;
          text-align: center;
        }
        @media (max-width: 991px) {
          .div-2 {
            background-color: rgba(224, 201, 166, 1);
          }
        }
        .section {
          width: 100%;
          align-self: stretch;
          flex-grow: 1;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
        }
        .div-3 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 0px;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 50px;
          padding-bottom: 50px;
          width: 100vw;
          margin-left: 150px;
          text-align: center;
          margin-right: 150px;
        }
        @media (max-width: 991px) {
          .div-3 {
            margin-bottom: 0px;
            padding-bottom: 35px;
            background-color: rgba(224, 201, 166, 1);
          }
        }
      `}</style>
    </>
  );
}
