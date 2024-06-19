const CampoTexto = ({ setFiltro }) => {
  return (
      <ContainerEstilizado>
          <CampoTextoEstilizado 
          onChange={(evento) => { setFiltro(evento.target.value) }} 
          type="text" 
          placeholder="¿Qué estás buscando?"/>
          <IconoLupa src={search} alt="ícono de lupa" />
      </ContainerEstilizado>
  )
}

export default CampoTexto