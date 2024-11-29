import cat_logo from '../Images/icon_home_cat.png'


function Cat_Header() {
  return (
    <div className="homeCat">
      <header>
      <a href="index.html">
        <img
        src={cat_logo}
        className="logoCat"
        alt="cat-logo"
        href="index.html"/>
        </a>
        <br/>
        <a
          href="index.html"
          id="homeLink"
        >
          HOME
        </a>
      </header>
    </div>
  );
}


export default Cat_Header;
