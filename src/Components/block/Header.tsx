import styled from "styled-components";
import instagram from "../../assets/Instagram_icon.png";
import { MdMenu } from "react-icons/md";
import { useState } from "react";



const Header = () => {

     const [show, setShow] = useState(false); 


     const dropDown = () => {
        setShow(!show)
     }


    return(
        <Head>
         
          <Holder>
            <Cart2>
                <Logo src={instagram} />
            </Cart2>
          
            <Cart1>
                <Lord>HOME</Lord>
                <Lord>SHOP</Lord>
                <Lord>PAGES</Lord>
                <Lord>ADDRESS</Lord>
            </Cart1>

            <Cart3>
                <Cat1>
                    <Cart1>CART</Cart1>
                </Cat1>

                <Login>
                    <Login1>LOGIN</Login1>
                </Login> 
            </Cart3>

            <Menu onClick={dropDown}>
                <MdMenu />
            </Menu>

            {/* mobile */}
            { show ?
            <Mobile>
            
                <Lord>HOME</Lord>
                <Lord>SHOP</Lord>
                <Lord>PAGES</Lord>
                <Lord>ADDRESS</Lord>
                <Login1>LOGIN</Login1>
            
            </Mobile>
            : null
            }


          </Holder>

          
        </Head>
    )

    

}

export default Header;

const Head = styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  

`;

const Holder = styled.section`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    position:relative;

    
`;

const Lord = styled.section`


`;


const Cart1 = styled.section`
   display: flex;
align-items: center;
gap: 50px;
font-weight: 600;
font-size: 13px;

@media screen and (max-width: 768px) {
    display:none
}
`;

const Cart2 = styled.section`
    

`;

const Logo = styled.img`
     width: 80px;
    display: flex;
align-items: center;

`;

const Cart3 = styled.div`
   display: flex;
   align-items: center;
   font-size: bold;
`
const Cat1 = styled.div`
      display: flex;
`;


const Login = styled.div`
   @media screen and (max-width: 768px) {
    display: none;
   }
    
`;
const Login1 = styled.button`
    font-size: bold;
    color: blue;
`;

const Menu = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

   const Mobile = styled.div`
   display: none;

   @media screen and (max-width: 768px) {
    position: absolute;
   background-color: green;
   height: 300px;
   width:200px;
   top: 90px;
   right: 0px;
   display: flex;
   flex-direction: column;
   gap: 15px;
   padding: 10px;
    
   }
   `;