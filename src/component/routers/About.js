import { Fragment } from "react";
import { Figure, Navbar } from "react-bootstrap/";
import { Container } from "react-bootstrap";
import classes from "./../Layout/Header.module.css";

const App = () => {
  return (
    <Fragment>
      <div className={classes.headline}>
        <Container className="p-1">The Generics</Container>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>About</h1>
        <Figure>
          <Figure.Image
            className="m-2"
            width={171}
            height={180}
            alt="171x180"
            src="https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6"
          />
          <Figure.Caption className="m-5 p-5">
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now. , The things we are accusing of these in
            the explication of the truth receives from the flattery of her will
            never be the trouble and they are refused to the pleasures and the
            pleasures of the pain, explain the treatment of excepturi of the
            blessed sufferings. I never said will unfold in him receives at
            another time he may please the one that those works, we are less
            than they, this refused to the pleasures of deleniti? Those are!
            Will unfold in times of pleasure, this pain will be a right enjoyed
            by corrupt, are accusing him of all pleasures, and seek his own, or,
            to the needs of the agony of the choice. We hate the fellow. Lorem
            ipsum dolor, sit amet consectetur rebates. The distinction, that
            arise from or to. The greater, therefore, an obstacle to the duties
            of the debts receives the very great importance to us that these are
            consequent to that question is answered, which was selected for the
            fault, it is often one of us, however, have any! Moreover, this is
            often not at once take the hardships of the life of harsh condemn,
            we are accusing him? Him whom something large cisterns.another time
            he may please the one that those works, we are less than they, this
            refused to the pleasures of deleniti? Those are! Will unfold in
            times of pleasure, this pain will be a right enjoyed by corrupt, are
            accusing him of all pleasures, and seek his own, or, to the needs of
            the agony of the choice. We hate the fellow. Lorem ipsum dolor, sit
            amet consectetur rebates. The distinction, that arise from or to.
            The greater, therefore, an obstacle to the duties of the debts
            receives the very great importance to us that these are consequent
            to that question is answered, which was selected for the fault, it
            is often one of us, however, have any! Moreover, this is often not
            at once take the hardships of the life of harsh condemn, we are
            accusing him? Him whom something large cisterns
          </Figure.Caption>
        </Figure>
        <Navbar variant="dark" bg="dark" className="p-3">
          <Navbar.Brand>The Generics</Navbar.Brand>
          <Navbar.Text style={{ textAlign: "end" }}>Contact Us</Navbar.Text>
        </Navbar>
      </div>
    </Fragment>
  );
};

export default App;
