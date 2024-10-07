interface HeaderComponentProps {};

const HeaderComponent : React.FC<HeaderComponentProps> = () => {
    return(
        <div className="header">
            <span>Weaponry</span>
            <ul className="header-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Jobs</li>
            </ul>
        </div>
    );
}

export default HeaderComponent;