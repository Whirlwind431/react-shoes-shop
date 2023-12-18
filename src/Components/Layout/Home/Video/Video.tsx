import "./Video.css";
import YouTube from 'react-youtube';

function Video(): JSX.Element {
    return (
        <div className="Video Box">
            <h4>Learn something new!</h4>
            <YouTube videoId="v_5j7B31V9Y" />

        </div>
    );
}

export default Video;
