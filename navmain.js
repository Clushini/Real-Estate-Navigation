class LO extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            directory: [
                {page: "home", subpages: [], link: "#", showsub: false},
                {page: "cre asset search", subpages: [], link: "#", showsub: false},
                {page: "principal investor intro", subpages: [], link: "#", showsub: false},
                {page: "service provider intro", subpages: [], link: "#", showsub: false},
                {page: "ica employment opp.", subpages: [], link: "#", showsub: false},
                {page: "global service provider db", subpages: [], link: "#", showsub: false},
                {page: "global membership orgs", subpages: [], link: "#", showsub: false}
            ]
        }

        this.showSub = this.showSub.bind(this);
    } 

    showSub(index) {
        let copyarr = [...this.state.directory];
        copyarr[index].showsub = !copyarr[index].showsub;
        this.setState({
            directory: copyarr
        });
        this.props.getpage(copyarr[index].page, copyarr[index].link);
    }

    render() {
        return(
            <div>  
                {
                    this.state.directory.map((tab, index) => {
                        return <div key={tab.page}>
                            <div className="mainbuttonwrap" key={tab.page} onClick={() => this.showSub(index)}>{tab.page.toUpperCase()}</div>
                               {(tab.subpages.length > 0) 
                                && 
                                <div className={(this.state.directory[index].showsub) ? "" : "hidden"}>{
                                    tab.subpages.map(subtab => {
                                    return <div className="subbuttonwrap" key={subtab.page} onClick={() => this.props.getpage(tab.page, subtab.link, subtab.page)}>{subtab.page.toUpperCase()}</div>
                                })
                                }</div>
                            }
                        </div>
                    })
                }
            </div>
        );
    }
}

class SP extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            directory: [
                {page: "dashboard", subpages: [], link: "#", showsub: false},
                {page: "jvmp intro", subpages: [], link: "#", showsub: false},
                {page: "communication center", subpages: [], link: "#", showsub: false},
                {page: "document center", subpages: [], link: "#", showsub: false},
                {page: "global service provider db", subpages: [], link: "#", showsub: false},
                {page: "global membership orgs", subpages: [], link: "#", showsub: false}
            ]
        }

        this.showSub = this.showSub.bind(this);
    } 

    showSub(index) {
        let copyarr = [...this.state.directory];
        copyarr[index].showsub = !copyarr[index].showsub;
        this.setState({
            directory: copyarr
        });
        this.props.getpage(copyarr[index].page, copyarr[index].link);
    }

    render() {
        return(
            <div>  
                {
                    this.state.directory.map((tab, index) => {
                        return <div key={tab.page}>
                            <div className="mainbuttonwrap" key={tab.page} onClick={() => this.showSub(index)}>{tab.page.toUpperCase()}</div>
                            {(tab.subpages.length > 0) 
                                && 
                                <div className={(this.state.directory[index].showsub) ? "" : "hidden"}>{
                                    tab.subpages.map(subtab => {
                                    return <div className="subbuttonwrap" key={subtab.page} onClick={() => this.props.getpage(tab.page, subtab.link, subtab.page)}>{subtab.page.toUpperCase()}</div>
                                })
                                }</div>
                            }
                        </div>
                    })
                }
            </div>
        );
    }
}

class ICA extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            directory: [
                {page: "my cache", subpages: [{page: "manage portfolios", link: "#"}], link: "#", showsub: false},
                {page: "create asset", subpages: [], link: "#", showsub: false},
                {page: "extract images", subpages: [], link: "#", showsub: false},
                {page: "accounting", subpages: [], link: "#", showsub: false}
            ]
        }

        this.showSub = this.showSub.bind(this);
    } 

    showSub(index) {
        let copyarr = [...this.state.directory];
        copyarr[index].showsub = !copyarr[index].showsub;
        this.setState({
            directory: copyarr
        });
        this.props.getpage(copyarr[index].page, copyarr[index].link);
    }

    render() {
        return(
            <div>  
                {
                    this.state.directory.map((tab, index) => {
                        return <div key={tab.page}>
                            <div className="mainbuttonwrap" key={tab.page} onClick={() => this.showSub(index)}>{tab.page.toUpperCase()}</div>
                               {(tab.subpages.length > 0) 
                                && 
                                <div className={(this.state.directory[index].showsub) ? "" : "hidden"}>{
                                    tab.subpages.map(subtab => {
                                    return <div className="subbuttonwrap" key={subtab.page} onClick={() => this.props.getpage(tab.page, subtab.link, subtab.page)}>{subtab.page.toUpperCase()}</div>
                                })
                                }</div>
                            }
                        </div>
                    })
                }
            </div>
        );
    }
}

class PI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            directory: [
                {page: "dashboard", subpages: [], link: "#", showsub: false},
                {page: "my inventory", subpages: [{page: "assets", link: "#"}, {page: "portfolio", link: "#"}], link: "#", showsub: false},
                {page: "search", subpages: [{page: "new search", link: "#"}, {page: "favorites", link: "#"}, {page: "saved searches", link: "#"}], link: "#", showsub: false},
                {page: "sales & aquisitions", subpages: [], link: "#", showsub: false},
                {page: "global service provider db", subpages: [{page: "search sps", link: "#"}, {page: "my preferred sps", link: "#"}], link: "#", showsub: false}
            ]
        }

        this.showSub = this.showSub.bind(this);
    } 

    showSub(index) {
        let copyarr = [...this.state.directory];
        copyarr[index].showsub = !copyarr[index].showsub;
        this.setState({
            directory: copyarr
        });
        this.props.getpage(copyarr[index].page, copyarr[index].link);
    }

    render() {
        return(
            <div>  
                {
                    this.state.directory.map((tab, index) => {
                        return <div key={tab.page}>
                            <div className="mainbuttonwrap" key={tab.page} onClick={() => this.showSub(index)}>{tab.page.toUpperCase()}</div>
                               {(tab.subpages.length > 0) 
                                && 
                                <div className={(this.state.directory[index].showsub) ? "" : "hidden"}>{
                                    tab.subpages.map(subtab => {
                                    return <div className="subbuttonwrap" key={subtab.page} onClick={() => this.props.getpage(tab.page, subtab.link, subtab.page)}>{subtab.page.toUpperCase()}</div>
                                })
                                }</div>
                            }
                        </div>
                    })
                }
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        type: 'ICA',
        page: {}
    }

    this.handleType = this.handleType.bind(this);
    this.getPage = this.getPage.bind(this);
}

    handleType(typename) {
    this.setState({type: typename});
    }

    getPage(pagename, link, submain) {
    console.log("------");
    console.log("Main Page: " + pagename);
    console.log("Link: " + link);
    if (submain) {
    console.log("Subpage: " + submain);
    }
    console.log("------");
    this.setState({page: pagename});
    }

    componentDidMount() {
    //need to make api call here, need page type and current page so i can pass it down. promise and switch should do
    // fetch('http://localhost:58131/Home', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   })
    // })
        fetch('/Home/GetLoggedInUserType')
        .then(res => res.json())
        .then(result => {
            //console.log(result);
            this.setState({
                type: result.UserType
            })
        })
    }

    render() {
        return (
            <div className="App">
                <div className="navwrap">
                    {(this.state.type === "Investor") && <PI getpage={this.getPage} currentpage={this.state.page} />}
                    {(this.state.type === "") && <LO getpage={this.getPage} currentpage={this.state.page} />}
                    {(this.state.type === "ServiceProvider") && <SP getpage={this.getPage} currentpage={this.state.page} />}
                    {(this.state.type === "ICAdmin") && <ICA getpage={this.getPage} currentpage={this.state.page} />}
                </div>
            </div>
        );
    }

}

fetch('/Home/GetLoggedInUserType')
.then(res => res.json())
.then(result => {
    console.log(result);
    if (result.UserType === "" || result.UserType === "Investor" || result.UserType === "ServiceProvider" || result.UserType === "ICAdmin") {
        ReactDOM.render(<App />, document.getElementById('nav'));
    }
})