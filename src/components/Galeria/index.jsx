import Titulo from "../Titulo"
import Tag from "./Tags"
import Populares from "./Populares"
import styled from "styled-components"
import Imagen from "./Imagen"

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [],setTag, fotoSeleccionada, alAlternarFavorito}) => {
    return (
        <>
            <Tag etTag={setTag} />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen
                        alAlternarFavorito={alAlternarFavorito}
                        alSolicitarZoom={fotoSeleccionada}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagenesContainer>
                  
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria