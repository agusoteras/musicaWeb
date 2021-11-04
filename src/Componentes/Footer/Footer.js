import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="footer_contact">
                   <a href="https://www.facebook.com/agusoteras" target="_blank">
                       <i className="fab fa-facebook facebook"> </i>
                   </a>

                   <a href="https://open.spotify.com/artist/5hu3DKzTcKPOt7VyIQeMQv?si=BpizzRoxSU2rg-MWuq7wtw&utm_source=copy-link&dl_branch=1&nd=1" target="_blank">
                       <i className="fab fa-spotify spotify"> </i>
                   </a>

                   <a href="https://www.youtube.com/channel/UCZXYwUkCv8WQl9htOHqyUyg" target="_blank">
                       <i className="fab fa-youtube youtube"> </i>
                   </a>

                   <a href="https://www.instagram.com/agusoteras/?hl=es" target="_blank">
                       <i className="fab fa-instagram instagram"> </i>
                   </a>

                   <a href="https://music.apple.com/gb/artist/agu-soteras/1460013043" target="_blank">
                       <i className="fab fa-apple apple"> </i>
                   </a>

                   <a href="https://www.deezer.com/en/album/98804732" target="_blank">
                       <i className="fab fa-deezer deezer"> </i>
                   </a>
            </div>
            <div className="footer_info">
                   <p> by Agu Soteras </p>
            </div>
        </footer>
    )
}

export default Footer