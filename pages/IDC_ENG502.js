import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function MyComponent(props) {
  return (
    <>
      <View href="https://abnv.ml/drive/IDC_ENG502" style={styles.view1}>
        <Text>
          <p style="color:blue;">
            <strong>./</strong>drive<strong>/</strong>IDC_ENG502
          </p>
        </Text>
      </View>
      <div maxWidth={1200} style={styles.div1}>
        <section style={styles.section1}>
          <p>
            <br />
          </p>
          <p>
            <strong>
              <Text>IDC_ENG502</Text>
            </strong>
          </p>
          <p>
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/lit%20and%20sci%20matt%20ar.pdf"
              rel="noopener noreferrer"
              target="_blank"
              style="color: blue;"
            >
              <Text>Matthew Arnold: “</Text>
              <em>
                <Text>Literature and Science</Text>
              </em>
              <Text>”</Text>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/huxx.pdf"
              rel="noopener noreferrer"
              target="_blank"
              style="color: blue;"
            >
              <Text>T.H. Huxley: “</Text>
              <em>
                <Text>Science and Culture</Text>
              </em>
              <Text>”</Text>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/khun.pdf"
              rel="noopener noreferrer"
              target="_blank"
              style="color: blue;"
            >
              <Text>T.S. Kuhn: “</Text>
              <em>
                <Text>The Nature and Necessity of Scientific Revolution</Text>
              </em>
              <Text>”</Text>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/snow_1959.pdf"
              rel="noopener noreferrer"
              target="_blank"
              style="color: blue;"
            >
              <Text>C.P. Snow: “</Text>
              <em>
                <Text>The Two Cultures</Text>
              </em>
              <Text>”</Text>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/poe.pdf"
              rel="noopener noreferrer"
              target="_blank"
              style="color: blue;"
            >
              <Text>Edgar Allan Poe: “</Text>
              <em>
                <Text>To Science</Text>
              </em>
              <Text>”</Text>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/RICHARD%20P.%20FEYNMAN-SURELY%20YOU'RE%20JOKING%20MR.%20FEYNMAN.PDF"
              rel="noopener noreferrer"
              target="_blank"
              style="color: blue;"
            >
              <Text>Richard Feynman: "</Text>{" "}
              <em>
                <Text>Surely You’re Joking Mr. Feynman"</Text>
              </em>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/Connie%20Willis%20-%20Bellwether%20%20-Spectra%20(2009).pdf"
              rel="noopener noreferrer"
              target="_blank"
              style="color: blue;"
            >
              <Text>Connie Willis: "</Text>{" "}
              <em>
                <Text>Bellwether</Text>
              </em>{" "}
              <Text>"</Text>
            </a>
          </p>
        </section>
      </div>
      <View style={styles.view2}>
        <Text>
          <a href="https://abnv.ml/drive/" style="color:blue">
            ./drive
          </a>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view1: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginTop: 20,
    height: "auto",
    paddingTop: 0,
    backgroundColor: "rgba(147, 155, 147, 1)",
    opacity: 1,
    fontFamily: '"sans-serif", sans-serif',
    paddingBottom: 0,
    marginBottom: "-2px",
    marginLeft: 150,
    marginRight: 150,
    paddingLeft: "px",
    "@media (max-width: 991px)": {
      display: "flex",
      flexDirection: "row",
      overflow: "auto",
      backgroundColor: "rgba(224, 201, 166, 1)",
      paddingBottom: "px",
      marginTop: "0px",
      width: "100vw",
      alignSelf: "stretch",
      marginLeft: "auto",
      marginRight: "auto",
    },
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    cursor: "pointer",
    pointerEvents: "auto",
  },
  div1: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
    paddingBottom: 0,
    marginLeft: 150,
    backgroundColor: "rgba(251, 251, 248, 1)",
    marginRight: 150,
    marginBottom: 1,
    "@media (max-width: 991px)": { backgroundColor: "rgba(224, 201, 166, 1)" },
    textAlign: "left",
  },
  section1: {
    width: 100,
    alignSelf: "stretch",
    flexGrow: 1,
    maxWidth: 1200,
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
  },
  view2: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginTop: 20,
    height: "auto",
    textAlign: "center",
  },
});
