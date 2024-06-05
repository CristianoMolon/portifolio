import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, Botaotema, SidebarContainer } from './styles'


const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Cristiano Molon</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>CristianoMolon</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro Front-end</Descricao>
      <Botaotema>Trocar tema</Botaotema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
