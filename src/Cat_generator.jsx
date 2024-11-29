import ReactDOM from "react-dom/client";
import './Cat_Generator/cat_Generator_Page.css';
import CatPicker from './Cat_Generator/CatPicker.jsx';

const entryPoint = document.getElementById("catPicker");
ReactDOM.createRoot(entryPoint).render(<CatPicker />);