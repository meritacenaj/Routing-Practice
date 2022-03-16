import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Number = (props) => {
    const { nr, color, bgcolor } = useParams();
    const {results} = props;
    if (isNaN(nr) == false) {
    return (
        <div>
            <p>the number is: {nr}</p>
        </div>

    );
    
}
    else
        return (
        <div>
            <p style={{color:color, backgroundColor:bgcolor}} >the word is: {nr}</p>
        </div> );

}
export default Number;