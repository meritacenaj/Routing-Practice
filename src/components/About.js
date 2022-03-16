import { Link, useNavigate } from "react-router-dom";
import React, {useState} from "react";

const About = (props) => {
        const {results, setResults} = props;
        const [name, setName] = useState("");
        const [comment, setComment] = useState("");
        const navigate = useNavigate();


        const sendSurvey = (e) => {
            e.preventDefault();
            setResults([...results, {name: name, coment:comment}])
            navigate("/");
          }
            
          


    return (
        <div>
     <form onSubmit={ sendSurvey }>
           <label>Your Name:</label>
          <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
          <label>Your Comment:</label>
          <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
          <input type="submit" value="Submit Survey" />
      </form>
      <Link to={"/"}>Go to Home</Link>
        </div>

    );
}
export default About;