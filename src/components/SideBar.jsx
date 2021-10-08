import spotifyLogo from '../assets/small_white_logo.svg'
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="container pr-0 left_navbar">
          <div className="row">
            <div className="col-12">
              <Link to={"/"}>
              <div className="d-flex justify-content-start align-items-center mt-2 mb-4 spotify_logo_section">
                <img src={spotifyLogo} className="mr-1 spotify_logo"  alt="" width="80"/>
                <p className="m-0">Spotify<sup>®</sup></p>
              </div>
              </Link>
            <div className="col-12 p-0">
              <div className="d-flex flex-column navbar_main_section"> 
                <div className="d-flex align-items-center sidebar_home active mr-2">
                  <i className="bi bi-house-door left_nav_icons mr-2"></i>
                  <p className="m-0">Home</p>
                </div>
                <div className="d-flex align-items-center sidebar_search">
                  <i className="bi bi-search left_nav_icons mr-2"></i>
                  <p className="searchHolder m-0">Search</p>
                  <input type="text" style={{height: "32px", padding: "3px", width: "150px", backgroundColor: "#ccc"}} className="d-none searchArea"/>
                </div>
                <div className="d-flex align-items-center sidebar_library">
                  <i className="bi bi-bookshelf left_nav_icons mr-2"></i>
                  <p className="m-0">Your Library</p>
                </div>
                <div className="d-flex align-items-center mt-4 sidebar_create_playlist">
                  <div className="playlist_icon" ><i className="bi bi-plus-square-fill left_nav_icons mr-2"></i></div>
                  <p className="m-0">Create Playlist</p>
                </div>
                <div className="d-flex align-items-center sidebar_liked_songs">
                  <div className="liked_song_icon mr-2"><i className="bi bi-heart-fill left_nav_icons"></i></div>
                  <p className="ml-0 mb-0">Liked songs</p>
                </div>
              </div>
            </div>
            <div className="col-12 p-0 user_playlist mt-3">
              <div className="d-flex flex-column playlist_border_top pt-3 pr-2">
                <div className="d-flex"><p className="text_clamp_1">Funky heavy Bluesy</p></div>
                <div className="d-flex"><p className="text_clamp_1">Your Top Songs 2020</p></div>
                <div className="d-flex"><p className="text_clamp_1">In Love with you- Erika Badoo</p></div>
                <div className="d-flex"><p className="text_clamp_1">This is rod Stewart</p></div>
                <div className="d-flex"><p className="text_clamp_1">FRANCHISE ft Young Thug</p></div>
                <div className="d-flex"><p className="text_clamp_1">Your Top Songs 2019</p></div>
                <div className="d-flex"><p className="text_clamp_1">Palleggio</p></div>
                <div className="d-flex"><p className="text_clamp_1">This is Joe Bonamassa</p></div>
                <div className="d-flex"><p className="text_clamp_1">Jun 19</p></div>
                <div className="d-flex justify-content-between"><p className="text_clamp_1">Jack 30th Party 2</p><i className="bi bi-people-fill"></i></div>
                <div className="d-flex justify-content-between"><p className="text_clamp_1">Jack 30th Party</p><i className="bi bi-people-fill"></i></div>
                <div className="d-flex justify-content-between"><p className="text_clamp_1">This is Opeth</p><i className="bi bi-people-fill"></i></div>
                <div className="d-flex justify-content-between"><p className="text_clamp_1">Metal Ballads</p><i className="bi bi-people-fill"></i></div>
                <div className="d-flex justify-content-between"><p className="text_clamp_1">New Playliist</p><i className="bi bi-people-fill"></i></div>
                <div className="d-flex"><p className="text_clamp_1">Your Top Songs 2018</p></div>
                <div className="d-flex"><p className="text_clamp_1">Jazz Classics Blue Note Edition</p></div>
                <div className="d-flex"><p className="text_clamp_1">Your Top Songs 2018</p></div>
                <div className="d-flex"><p className="text_clamp_1">Jazz Classics Blue Note Edition</p></div>
                <div className="d-flex"><p className="text_clamp_1">Your Top Songs 2018</p></div>
                <div className="d-flex"><p className="text_clamp_1">Jazz Classics Blue Note Edition</p></div>
                <div className="d-flex"><p className="text_clamp_1">Your Top Songs 2018</p></div>
                <div className="d-flex"><p className="text_clamp_1">Jazz Classics Blue Note Edition</p></div>
                <div className="d-flex"><p className="text_clamp_1">Your Top Songs 2018</p></div>
                <div className="d-flex"><p className="text_clamp_1">Jazz Classics Blue Note Edition</p></div>
                <div className="d-flex"><p className="text_clamp_1">Your Top Songs 2018</p></div>
                <div className="d-flex"><p className="text_clamp_1">Jazz Classics Blue Note Edition</p></div>
              </div>
            </div>
            <div className="d-flex p download_app_section mt-3 mb-2">
              <i className="bi bi-arrow-down-circle mr-2 "></i>
              <p className="m-0">Install App</p>
            </div>
            </div>
          </div>
        </div>
  )
}

export default SideBar;


