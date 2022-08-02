import './Header.css'


const Header = (props) => {
    return (
        <div className="bg-image">
            <div className="bg-content">
                <div className="header-title">todo app</div>
               
                {props.children}
            </div>
        </div>
    )
}

export default Header;