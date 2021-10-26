import styled from "styled-components";

export const Style = styled.div`
    .abaPesquisa{
        text-align: center;

        div{
            button{
                background: transparent;
                border: none;
                cursor: pointer;
            }

            button:hover{
                border-bottom: 1px solid red;
            }

            #img-buscar{
                width: 20px;
            }

            input[type='number']{
                height: 25px;
                outline: none;
                border: none;
                border-bottom: 1px solid black;
            }
        }
    }

    .abaPesquisa span{
        color: #82B7D4;
    }

    .abaPesquisa span {
            text-align: center;
            font-size: 20px;
            color: #82B7D4;
        }
        .abaPesquisa h1:before, .abaPesquisa h1:after {
            content: ' ';
            position: absolute;
            width: 5%;
            border-top: 1px solid #82B7D4;
            margin-top: 1.7%;
        }

        .abaPesquisa h1:before {
            margin-left: -70px;
        }

        .abaPesquisa h1:after {
            margin-left: 5px;
        }

`;

export const CepInfos = styled.div `
    background: #E9E9E9;
    text-align: center;

        .cepInfos{
            background: #fff;
            width: 80vw;
            margin: auto;
            border-radius: 15px;

            .cepDetails{
                display: flex;
                justify-content: space-around;

                span{
                    font-weight: bold;
                    font-size: 20px;
                    
                }
            }
        }
`;