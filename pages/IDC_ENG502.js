export default function MyComponent(props) {
  return (
    <>
      <div href="https://abnv.ml/drive/IDC_ENG502.js" className="div">
        <p style="color:blue;">
          <strong>./</strong>drive<strong>/</strong>IDC_ENG502
        </p>
      </div>
      <div className="div-2" maxWidth={1200}>
        <section className="section">
          <p>
            <br />
            <strong>IDC_ENG502</strong>
            <br />
            <br />
            │
            <br />
            └───
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/lit%20and%20sci%20matt%20ar.pdf"
              style="color:blue;"
            >
              Matthew Arnold: “<em>Literature and Science</em>”
            </a>
            <br />
            <br />
            │
            <br />
            └───
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/huxx.pdf"
              style="color:blue;"
            >
              T.H. Huxley: “<em>Science and Culture</em>”
            </a>
            <br />
            <br />
            │
            <br />
            └───
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/khun.pdf"
              style="color:blue;"
            >
              T.S. Kuhn: “
              <em>The Nature and Necessity of Scientific Revolution</em>”
            </a>
            <br />
            <br />
            │
            <br />
            └───
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/snow_1959.pdf"
              style="color:blue;"
            >
              C.P. Snow: “<em>The Two Cultures</em>”
            </a>
            <br />
            <br />
            │
            <br />
            └───
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/poe.pdf"
              style="color:blue;"
            >
              Edgar Allan Poe: “<em>To Science</em>”
            </a>
            <br />
            <br />
            │
            <br />
            └───
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/RICHARD%20P.%20FEYNMAN-SURELY%20YOU'RE%20JOKING%20MR.%20FEYNMAN.PDF"
              style="color:blue;"
            >
              Richard Feynman: " <em>Surely You’re Joking Mr. Feynman"</em>
            </a>
            <br />
            <br />
            │
            <br />
            └───
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/Connie%20Willis%20-%20Bellwether%20%20-Spectra%20(2009).pdf"
              style="color:blue;"
            >
              Connie Willis: " <em>Bellwether</em> "
            </a>
            <br />
            <br />
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
