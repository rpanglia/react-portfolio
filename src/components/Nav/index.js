import React from "react";

function Nav(props) {
    
    //the following tabs will redirect to appropriate pages via onClick()
    const tabs = ["Home", "About", "Projects", "Resume", "Contact"];

    return (
        <header className="flex-row">
            <h2 className="name">
                <a href="/about">Ravneet Panglia</a>
            </h2>

            <nav className="flex-row">
                <ul className="nav-row" style={{display: 'flex', justifyContent: 'space-between'}}>
                    {tabs.map((tab) => (
                        <li className="mx-2 noBullet" key={tab}>
                            <a
                                href={"#" + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)} //
                                className={
                                    props.currentPage === tab
                                        ? "navActive"
                                        : "mx-2"
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}


export default Nav;
