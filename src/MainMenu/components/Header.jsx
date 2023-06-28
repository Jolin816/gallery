import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    function openPage1() {
        navigate('/menu');
    }

    function openPage2() {
        navigate('/viewpage');
    }

    return (
        <>
            {/* <ul id="navigation">
                <button
                    onClick={openPage1}
                >My Gallery</button>
                <button 
                    onClick={openPage2}
                >View</button>
            </ul> */}
            <button id = "gallery">My Gallery</button>
            <button id = "view" onClick = {openPage2}>View</button>
        </>
    )
}

export default Header;