import React,{useState} from "react";


function MovieCard(props) {
  const [isLiked, setIsLiked] = useState(false);
        return (
          <div
            key={props.index}
            className="card mb-2 m-2"
            style={{ width: "18rem" }}
          >
            <img
              className="card-img-top img-fluid"
              src={props.poster}
              alt="Card"
              style={{ height: "20rem" }}
            />
            <div className="card-body">
              <p className="card-text">{props.title}</p>
              <div>
                <button className="card-btn btn-sm btn-outline ">
                  watch trailer
                </button>
                <i
                  className={
                    isLiked
                      ? `fas fa-heart fa-2x mr-sm-3`
                      : "far fa-heart fa-2x mr-sm-3"
                  }
                  onClick={(e) => setIsLiked(!isLiked)}
                ></i>
              </div>
            </div>
          </div>
        );
  
}

export default MovieCard;
