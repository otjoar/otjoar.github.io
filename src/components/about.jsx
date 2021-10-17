import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "vmware_skill", 
          content: "VMWare Applications", 
          percentage: "95%", 
          value: "95" 
        },
        { id: "cisco_skill", 
          content: "Cisco", 
          percentage: "95%", 
          value: "95" },
        {
          id: "windows_skill",
          content: "Windows OS",
          percentage: "95%",
          value: "95"
        },
        {
          id: "mac_skill",
          content: "MacOS",
          percentage: "90%",
          value: "90"
        },
        {
          id: "linux_skill",
          content: "Red Hat Enterprise Linux",
          percentage: "95%",
          value: "95"
        },
        { id: "security_skill", 
          content: "Computer Security", 
          percentage: "95%", 
          value: "95" 
        },
        {
          id: "cloud_systems_skill",
          content: "Cloud Systems",
          percentage: "85%",
          value: "85"
        },
        {
          id: "java_skill",
          content: "Java",
          percentage: "70%",
          value: "70"
        },
        {
          id: "python_skill",
          content: "Python",
          percentage: "75%",
          value: "75"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a confident professional with experience and expertiese in networking, systems engineering, troubleshooting, customer relations and leadership skills."
        },
        {
          id: "second-p-about",
          content:
            "I have 26+ years of technology leadership overseeing hundreds of Microsoft, Hypervisor, VMware, Citrix, Linux, and other IT projects in both large enterprise environments and small businesses alike. I adapt to working through difficult situations and coordinating diverse groups to achieve successful outcomes."
        },
        {
          id: "third-p-about",
          content:
            "I have experience installing and configuring a variety of operating systems, including but not limited to: Windows NT4.0/2000/2003/2008/2012 Server/Enterprise, Share Point 2003/2007/2010, Microsoft Dynamics CRM 4.0/2011, Windows XP Pro/Vista/7/8.1/10, Citrix, ESXi 4.0/5.5/6.0, VM Ware Server 4.0/5.5/6.0, SCO UNIX, Ubuntu Linux, Red Hat, Mobile Programming Android/IOS and Novell Netware."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
