import { useState, useEffect } from "react";

function ArtistSection(props) {
  //console.log(props.artist);

  const [artist, setArtist] = useState(props.artist);
  const [artistInfo, setArtistInfo] = useState({});
  const [artistTopTracks, setArtistTopTracks] = useState([]);
  const [artistInfoCollected, setArtistInfoCollected] = useState(false);

  async function fetchArtistInfo() {
    try {
      let artistInfoResponse = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${artist}`
      );

      let artistData = await artistInfoResponse.json();
      let artistTracksResponse = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistData.id}/top?limit=50`
      );

      let artistTopTracks = await artistTracksResponse.json();

      setArtistInfo(artistData);
      setArtistTopTracks(artistTopTracks.data);

      Object.entries(artistData).length > 0 &&
        artistTopTracks.length > 0 &&
        setArtistInfoCollected(true);

      console.log(artistInfo);
      console.log(artistTopTracks);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchArtistInfo();
  }, []);

  return (
    artistTopTracks.length > 0 && (
      <>
        <div
          style={{
            position: "absolute",
            top: "40vh",
            background: "linear-gradient(0deg, rgba(0,0,0,1) 53%, rgb(117, 116, 116) 100%)",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <div className="col-12 mt-3">
            <div className="icon d-flex justify-content-start align-items-center">
              <i
                className="bi bi-pause-circle-fill mr-3"
                style={{ fontSize: "3.5rem", color: "#1cbb56" }}
              />
              <button
                type="button"
                className="btn btn-outline-secondary px-2 mr-2"
                style={{
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 900,
                  borderColor: "#fff",
                }}
              >
                FOLLOW
              </button>
              <i
                className="bi bi-three-dots "
                style={{ color: "#fff", letterSpacing: 2, marginLeft: 10 }}
                id="dots"
              />
            </div>
          </div>
          <div className="col-12 mt-2">
            <div className="d-flex">
              <div
                className="d-flex flex-column"
                style={{ maxWidth: "70%", minWidth: "70%" }}
              >
                <h5
                  className="m-0 p-0"
                  style={{ fontWeight: 900, color: "#fff" }}
                >
                  Popular
                </h5>
                <div className="ml-3 mt-4">
                  {/*TRACK */}

                  {artistTopTracks.map((track, index) => {
                    return (
                      index < 6 && (
                        <div className="d-flex align-items-center justify-content-between mt-1">
                          <div
                            className="d-flex align-items-center"
                            style={{ width: "41%" }}
                          >
                            <div
                              className="d-flex align-items-center justify-content-between"
                              style={{ width: 90 }}
                            >
                              <p
                                className="m-0"
                                style={{ color: "#fff", opacity: "0.6" }}
                              >
                                {index + 1}
                              </p>
                              <div className="mr-3">
                                <img
                                  src={track.contributors[0].picture_medium}
                                  width="50px"
                                  height="50px"
                                />
                              </div>
                            </div>
                            <p className="m-0" style={{ color: "#fff" }}>
                              {track.title_short}
                            </p>
                          </div>
                          <p
                            className="m-0"
                            style={{
                              color: "#fff",
                              opacity: "0.6",
                              fontSize: "0.9rem",
                            }}
                          >
                            {track.rank}
                          </p>
                          <p
                            className="m-0"
                            style={{
                              color: "#fff",
                              opacity: "0.6",
                              fontSize: "0.9rem",
                            }}
                          >
                            {track.duration}
                          </p>
                        </div>
                      )
                    );
                  })}
                  <p
                    className="m-0 mt-3 text-white"
                    style={{
                      fontSize: "0.8rem",
                      letterSpacing: "0.8px",
                      opacity: "0.6",
                    }}
                  >
                    SEE MORE
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column ml-5"
                style={{ minWidth: "30%", maxWidth: "30%" }}
              >
                <h5
                  className="m-0 p-0"
                  style={{ fontWeight: 900, color: "#fff" }}
                >
                  Artist pick
                </h5>
                <div className="d-flex mt-3">
                  <div>
                    <img
                      src={artistInfo.picture_medium}
                      alt
                      width={60}
                      height={60}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="d-flex ml-3 align-items-center">
                      <img
                        src={artistTopTracks[0].album.cover_medium}
                        alt
                        width={25}
                        height={25}
                        style={{ objectFit: "cover", borderRadius: "50%" }}
                        className="mr-1"
                      />
                      <p
                        className="m-0"
                        style={{
                          color: "white",
                          opacity: "0.6",
                          fontSize: "0.8rem",
                        }}
                      >
                        Posted By {artistInfo.name}
                      </p>
                    </div>
                    <p
                      className="m-0 ml-3 mt-1"
                      style={{ color: "white", fontSize: "0.9rem" }}
                    >
                      {artistTopTracks[0].album.title}
                    </p>
                    <p
                      className="m-0 ml-3"
                      style={{
                        color: "white",
                        opacity: "0.6",
                        fontSize: "0.8rem",
                      }}
                    >
                      Playlist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default ArtistSection;
