import styled, { css } from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

interface IProps {
    isScrolled?: boolean;
}

export const Nav = styled.div<IProps>`
   color: white;
   font-size: 14px;
   position: fixed;
   width: 100%;
   top: 0;
   z-index: 999;
   background: linear-gradient( to top, transparent 0%, rgb(0,0,0,0.3) 50% );

   ${({ isScrolled }) =>
        isScrolled &&
        css`
        background-color: var(--main-color);
        `}

`
export const Container = styled.div`
   color: white;
   padding: 0px 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 70px;

    
`
export const Left = styled.div`
   display: flex;
   align-items: center;  
`
export const ImgLogo = styled.img`
  height: 55px;
  margin-right: 40px;
`
export const ItemLeft = styled.span`
margin-right: 20px;
cursor: pointer;
`

export const Right = styled.div`
   display: flex;
   align-items: center;
`

export const ImgProfile = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
`

export const ItemRight = styled.span`
    /* margin-right: 20px; */
    cursor: pointer;
`
const Icon = css`
    margin: 0px 15px;
    cursor: pointer;
`;

export const WrapIconLogo = styled(SearchIcon)`
    ${Icon};
`
export const WrapIconNotification = styled(NotificationsIcon)`
    ${Icon};
`
export const ProfileOptions = styled.div`
    display: none;
    background-color:  var(--main-color);
    border-radius: 5px;
`
export const Profile = styled.div`
        &:hover ${ProfileOptions} {
            display: flex;
            flex-direction: column;
            position: absolute;
        }
`

export const ProfileOptionsItem = styled.div`
    padding: 10px;
    cursor: pointer;
    font-size: 12px;
`

export const WrapIconArrow = styled(ArrowDropDownIcon)`
    ${Icon};
`
