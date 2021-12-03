export default function MyComponent(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <p>
            <strong>DHANUS M LAL</strong>
          </p>
        </div>
        <div className="div-3">
          <div className="builder-columns columns">
            <div className="builder-column column">
              <div className="div-4">
                <p style={{'color':'red','--hover-color':'blue','--hover-opacity':0.5}}><a href="url">HOME</a></p>
              </div>
            </div>

            <div className="builder-column column-2">
              <div className="div-5">
                <p style={{'color':'red','--hover-color':'blue','--hover-opacity':0.5}}><a href="url">ABOUT</a></p>
              </div>
            </div>

            <div className="builder-column column-3">
              <div className="div-6">
                <p style={{'color':'red','--hover-color':'blue','--hover-opacity':0.5}}><a href="url">BLOG</a></p>
              </div>
            </div>

            <div className="builder-column column-4">
              <div className="div-7">
                <p style={{'color':'red','--hover-color':'blue','--hover-opacity':0.5}}><a href="url">CONTACT</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-8" maxWidth={1200}>
        <section className="section">
          <p>
            <strong>
              I am a section! My content keeps from getting too wide, so that
              it's easy to read even on big screens.
            </strong>
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
          <p>
            <br />
          </p>{" "}
        </section>
      </div>{" "}
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 1px;
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
            margin-left: calc(50% - 50vw);
          }
        }
        .div-2 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          line-height: normal;
          height: auto;
          text-align: center;
          color: rgba(255, 255, 255, 1);
          padding-bottom: 0px;
          margin-bottom: -2px;
        }
        @media (max-width: 991px) {
          .div-2 {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .div-3 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-bottom: -1px;
        }
        .columns {
          display: flex;
        }
        @media (max-width: 999px) {
          .columns {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(25% - 15px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column {
            width: 100%;
          }
        }
        .div-4 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 30px;
          text-align: center;
          line-height: normal;
          height: auto;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(25% - 15px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-5 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 30px;
          text-align: center;
          line-height: normal;
          height: auto;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(25% - 15px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-6 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 30px;
          text-align: center;
          line-height: normal;
          height: auto;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(25% - 15px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-7 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 30px;
          text-align: center;
          line-height: normal;
          height: auto;
        }
        .div-8 {
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
          .div-8 {
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
      `}</style>{" "}
    </>
  );
}
