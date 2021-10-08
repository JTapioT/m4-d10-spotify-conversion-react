import SideBar from "./SideBar";
import NavigationArea from "./NavigationArea";
import PlayArea from "./PlayArea";
import React from "react";
import { useEffect, useState } from "react";

function Layout(props) {
  const [backGround, setBackGround] = useState('');

  const bgstyle = {background: `url(${backGround})`}

  async function fetchBackGround() {
    try {
      let artistInfoResponse = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${props.background}`
      );

      let artistImage = await artistInfoResponse.json();
      setBackGround(artistImage.picture_big);

      console.log("here is the artist image");
      console.log(artistImage);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBackGround();
  }, [])

  return backGround && (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 pl-0">
          <SideBar />
        </div>
        <div className="col">
          <div className="row pr-3">
            <NavigationArea />
            {props.children}
            <PlayArea />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
