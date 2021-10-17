import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.png";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.png";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Certificates extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Certifications</h3>
                <p className="subtitle-a">
                  Below is a list of some of my certifications.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col">
                        <h2 className="w-title">CCNP</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Capable of implementing, maintaining and resolving issues relating to local and wide area networks at the enterprise level. 
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col">
                        <h2 className="w-title">CASP+</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Advanced-level cybersecurity certified covering technical skills in security architecture and senior security engineering in all systems.
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock2} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col">
                        <h2 className="w-title">MCITP Enterprise Server Administrator</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            IT Specialist responsible for the overall Windows Server environment and architecture.
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col">
                        <h2 className="w-title">MCDBA</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Experienced in assisting organizations and businesses with the administration, implementation and design of Microsoft SQL Server 2000 databases.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock4} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col">
                        <h2 className="w-title">UNIX BSD Specialist</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Manages of user accounts and groups, processes, file systems, installed software and client networking configuration within BSD installation.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock5} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col">
                        <h2 className="w-title">AS/400</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Capable of handling the AS 400 mainframe, used for ERP and other mission-critical tasks, particularly in industries that require extreme reliability.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Certificates;
