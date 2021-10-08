import dummyPicture from '../assets/Clouds.png'

function PlayArea() {
  return(
      <div className="container-fluid play-bar d-inline-block p-0">
          <div className="row d-flex align-items-center">

            <div className="col-4 d-flex mt-0">
              <img src={dummyPicture} width="50px" height="50px" alt="selectedOne" />
              <div className="d-flex align-items-center mt-0">
              <div className="d-flex flex-column song_info">
                <span>Re-do the whole playarea</span>
                <span className="band_name">Queen</span>
              </div>
              <div className="ml-5">
              <i className="bi bi-heart"></i>
              <i className="bi bi-pip"></i>
            </div>
          </div>
          </div>
            <div className="col-5 align-items-center song-bar">
              <div className="row justify-content-center align-items-center song_bar_icons">
                <i
                  className="fa fa-random px-2"
                  style={{paddingLeft: "15px", paddingRight: "15px"}}
                ></i>
                <i
                  className="fa fa-step-backward px-2 "
                  style={{paddingLeft: "15px", paddingRight: "15px"}}
                ></i>
                <i
                  className="fa fa-play-circle px-2 play_button"
                  style={{paddingLeft: "15px", paddingRight: "15px"}}
                ></i>
                <i
                  className="fa fa-step-forward px-2 "
                  style={{paddingLeft: "15px", paddingRight: "15px"}}
                ></i>
                <i className="bi bi-arrow-repeat px-2"></i>
              </div>
              <div className="row justify-content-center">
                <progress
                  max="5"
                  value="2"
                  style={{width: "82%"}}
                ></progress>
              </div>
            </div>

            <div className="col-3 d-inline-block">
              <div className="row align-items-center justify-content-end">
          
                <i className="bi bi-volume-down"></i>
            
                <i className="bi bi-volume-mute"></i> 
              <i className="bi bi-music-note-list"></i>         
              <i className="bi bi-speaker"></i> 
              <i className="bi bi-volume-up"></i>
                  <div className="form-group d-inline-block">
                    <label forhtml="formControlRange"> </label>

                    <input
                      type="range"
                      className="form-control-range"
                      id="formControlRange"
                    />
                  </div>
                <i className="bi bi-list-starts px-2"></i>
                <i className="bi bi-arrows-angle-expand"> </i>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PlayArea;