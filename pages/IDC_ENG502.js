export default function MyComponent(props) {
  return (
    <>
      <div href="https://abnv.ml/drive/IDC_ENG502" className="div">
        <p style="color:blue;">
          <strong>./</strong>drive<strong>/</strong>IDC_ENG502
        </p>
      </div>
      <div className="div-2" maxWidth={1200}>
        <section className="section">
          <p>
            <br />
          </p>

          <p>
            <strong>IDC_ENG502</strong>
          </p>

          <p>
            <span style="color: blue;">
              Matthew Arnold: “Literature and Science”
            </span>
          </p>

          <p>
            <span style="color: blue;">T.H. Huxley: “Science and Culture”</span>
          </p>

          <p>
            <span style="color: blue;">
              T.S. Kuhn: “The Nature and Necessity of Scientific Revolution”
            </span>
          </p>

          <p>
            <span style="color: blue;">C.P. Snow: “The Two Cultures”</span>
          </p>

          <p>
            <span style="color: blue;">Edgar Allan Poe: “To Science”</span>
          </p>

          <p>
            <span style="color: blue;">
              Richard Feynman: "Surely You’re Joking Mr. Feynman"
            </span>
          </p>

          <p>
            <span style="color: blue;">Connie Willis: "Bellwether"</span>
          </p>
        </section>
      </div>
      <div className="div-3">
        <a href="https://abnv.ml/drive/" style="color:blue">
          ./drive
        </a>
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
          padding-bottom: 0px;
          margin-bottom: -2px;
          margin-left: 150px;
          margin-right: 150px;
          padding-left: px;
          line-height: normal;
          text-align: center;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
          pointer-events: auto;
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
          padding-top: 25px;
          padding-bottom: 0px;
          margin-left: 150px;
          background-color: rgba(251, 251, 248, 1);
          margin-right: 150px;
          margin-bottom: 1px;
          text-align: left;
          color: rgba(0, 0, 0, 1);
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
          margin-top: 20px;
          line-height: normal;
          height: auto;
          text-align: center;
        }
      `}</style>
    </>
  );
}
