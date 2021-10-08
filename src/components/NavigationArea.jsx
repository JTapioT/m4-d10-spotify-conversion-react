import profilePicture from "../assets/Clouds.png";
import {Link} from "react-router-dom";

function NavigationArea() {
  return (
    <div className="col-12 sticky-top">
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex">
          <div className="nav-arrow-bg mr-2">
            <i className="bi arrow_icon bi-chevron-left"></i>
          </div>
          <div className="nav-arrow-bg">
            <i className="bi arrow_icon bi-chevron-right"></i>
          </div>
        </div>

        <div className="d-flex align-items-center avatar-pill rounded-pill">
          <div className="pl-1 mr-1">
            <img
              src={profilePicture}
              className="profile_picture"
              width="25"
              height="25"
              alt=""
            />
          </div>
          <div
            className="dropdown-toggle pr-1"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            John Döner
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to="/album" className="dropdown-item">Album Page</Link>
              <Link to="/artist" className="dropdown-item">Artist Page</Link>
              <Link to="/login" className="dropdown-item">Log-in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationArea;