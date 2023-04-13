import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

:root{
    --Color-primary:#FF577F;
    --Color-primary-Focus:#FF427F;
    --Color-primary-Negative:#59323F;
    --Negative: #E83F5B;
    --Sucess: #3FE864;
    --gray-4:#121214;
    --grey-3:#212529;
    --grey-2:#343B41;
    --grey-1:#868E96;
    --grey-0:#F8F9FA;
    --gray:#FFFFFF;

    --font-weight-700:700;
    --font-weight-400:400;
 
}

body{
    margin: 0 auto;
    font-family:'Inter', sans-serif;
    background-color: var(--gray-4);
}
button{
    cursor:pointer;
}

`;
export default GlobalStyled;
