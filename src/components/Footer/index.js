import React from "react";

import { SocialIcon } from "react-social-icons";

function Footer() {

    return (
        <footer>
            <div>
                <p>Ravneet Panglia &#169; {year}</p>
            </div>
            <div className="socials">
                <div>
                    <SocialIcon
                        href="mailto:ravneet.panglia@gmail.com"
                        target="_blank"
                    />
                </div>
                <div>
                    <SocialIcon
                        url="https://www.linkedin.com/in/ravneetpanglia/"
                        target="_blank"
                    />
                </div>
                <div>
                    <SocialIcon
                        url="https://github.com/rpanglia"
                        target="_blank"
                    />
                </div>
                
            </div>
        </footer>

    )
}

export default Footer;