import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer
          className="bg-light text-center text-white"
          style={{ marginTop: "3.8rem" }}
        >
          <div className="container p-4 pb-0">
            {" "}
            <section className="mb-4">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i class="fa-brands fa-square-facebook"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i class="fa-brands fa-square-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="#!"
                role="button"
              >
                <i class="fa-brands fa-google"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <i class="fa-brands fa-instagram"></i>{" "}
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="#!"
                role="button"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                className="btn btn-primary btn-floating m-1 "
                style={{ backgroundColor: "#333333" }}
                href="#!"
                role="button"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
