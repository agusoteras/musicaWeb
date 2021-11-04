import React from 'react';
import "./Section.css";
import fugaz from "../../Media/fugaz.png"

function Section() {
    return (
        <div className="section">
           <div className="article">
                      <p>Ya podes escuchar</p>
                      <p>"Fugaz" en Spotify</p>
                      <p>y todas las demás</p>
                      <p>plataformas digitales!</p>

              <div className="logos_section">
                   <a href="https://open.spotify.com/artist/5hu3DKzTcKPOt7VyIQeMQv?si=BpizzRoxSU2rg-MWuq7wtw&utm_source=copy-link&dl_branch=1&nd=1" target="_blank">
                       <i className="fab fa-spotify spotify"> </i>
                   </a>

                   <a href="https://www.youtube.com/channel/UCZXYwUkCv8WQl9htOHqyUyg" target="_blank">
                       <i className="fab fa-youtube youtube"> </i>
                   </a>

                   <a href="https://music.apple.com/gb/artist/agu-soteras/1460013043" target="_blank">
                       <i className="fab fa-apple apple"> </i>
                   </a>

                   <a href="https://www.deezer.com/en/album/98804732" target="_blank">
                       <i className="fab fa-deezer deezer"> </i>
                   </a>
                 </div>
           </div>
           <div className="image">
           <iframe src="https://open.spotify.com/embed/track/3Ate3rVbR1qdnmbamU2E5O?theme=0" width="500" height="500" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           </div>
        </div>
    )
}

export default Section
