import './SideDrawer.css';
import {Link} from 'react-router-dom'

const SideDrawer = ({show, click}) => {
  const sideDrawerStyleClass = ["sidedrawer"];

  if(show) {
    sideDrawerStyleClass.push("show")
  }
    return <div className={sideDrawerStyleClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link>

          <i className=" fas fa-shopping-cart"></i>

          <span>
            Cart <span className="sidedrawer__cartbadge"></span>
          </span>

          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
    
};

export default SideDrawer;
