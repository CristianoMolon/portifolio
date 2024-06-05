import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sunt nisi? Vero possimus rem, et expedita, tempora odio est optio facere dicta beatae amet. Assumenda voluptatem facilis molestias impedit quaerat!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=CristianoMolon&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=CristianoMolon&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
