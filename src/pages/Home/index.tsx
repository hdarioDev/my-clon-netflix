import React from 'react'
import AcUnitIcon from '@material-ui/icons/AcUnit';

import {
    Home
} from "./styles"
import NavBar from '../../components/NavBar';
import Featured from '../../components/Featured';

const DEFAULT_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/047313be-8d6a-46dd-9396-bd286fa260ad/BO-es-20220912-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const Index = () => {
    return (
        <Home>
            {/* <img src={DEFAULT_IMAGE} alt="Imagen de fondo" /> */}
            <NavBar />
            <Featured />


        </Home>

    )
}

export default Index
