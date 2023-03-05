import { Fragment } from "react";
import { Button, Navbar, Table } from "react-bootstrap";

function Home() {
  return (
    <Fragment>
      <div
        style={{
          height: "200px",
          backgroundColor: "#777777",
          textAlign: "center",
        }}
      >
        <Button variant="outline-dark">Get Our latest Album</Button>
        <div className="d-flex justify-content-center m-4">
          <img
            src="https://www.pngkey.com/png/full/359-3596811_png-play-button-logo.png"
            width="90"
            height="90"
            className="d-flex align-center"
            alt="React Bootstrap logo"
          />
        </div>
      </div>
      <Table responsive className="m-5 justify-content-center">
        <tbody>
          <tr>
            <td>JUL 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <Button
              variant="dark"
              style={{ background: "black", margin: "5px" }}
            >
              BUY TICKETS
            </Button>
          </tr>
          <tr>
            <td>JUL 19</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <Button
              variant="dark"
              style={{ background: "black", margin: "5px" }}
            >
              BUY TICKETS
            </Button>
          </tr>
          <tr>
            <td>JUL 22</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <Button
              variant="dark"
              style={{ background: "black", margin: "5px" }}
            >
              BUY TICKETS
            </Button>
          </tr>
          <tr>
            <td>JUL16</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <Button
              variant="dark"
              style={{ background: "black", margin: "5px" }}
            >
              BUY TICKETS
            </Button>
          </tr>
          <tr>
            <td>JUL 29</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <Button
              variant="dark"
              style={{ background: "black", margin: "5px" }}
            >
              BUY TICKETS
            </Button>
          </tr>
          <tr>
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <Button
              variant="dark"
              style={{ background: "black", margin: "5px" }}
            >
              BUY TICKETS
            </Button>
          </tr>
          <tr>
            <td>AUG 7</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <Button
              variant="dark"
              style={{ background: "black", margin: "5px" }}
            >
              BUY TICKETS
            </Button>
          </tr>
        </tbody>
      </Table>
      <Navbar fixed="bottom" variant="dark" bg="dark" className="p-3">
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Navbar.Text style={{ textAlign: "end" }}>Contact Us</Navbar.Text>
      </Navbar>
    </Fragment>
  );
}

export default Home;
