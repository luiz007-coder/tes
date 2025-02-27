import {
  HomeContainer,
  CargoSection,
  CargoList,
  CargoItem,
  PriceTag,
  SectionInfo,
  Arrow,
  FooterContent,
} from "../styles/styled";
import { FaCoins, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Home = () => {
  const cargos = [
    { nome: "Trainee", equivalencia: "Soldado", valor: 5 },
    { nome: "Assessor", equivalencia: "Cabo", valor: 15 },
    { nome: "Secretário", equivalencia: "Sargento", valor: 25 },
    { nome: "Secretário-Chefe", equivalencia: "Sargento", valor: 30 },
    { nome: "Assistente", equivalencia: "Subtenente", valor: 35 },
    { nome: "Assistente-Chefe", equivalencia: "Subtenente", valor: 45 },
    { nome: "Analista", equivalencia: "Aspirante a Oficial", valor: 50 },
    { nome: "Analista-Chefe", equivalencia: "Aspirante a Oficial", valor: 60 },
    { nome: "Supervisor", equivalencia: "Tenente", valor: 70 },
    { nome: "Supervisor-Geral", equivalencia: "Tenente", valor: 90 },
    { nome: "Inspetor", equivalencia: "Capitão", valor: 100 },
    { nome: "Inspetor-Geral", equivalencia: "Capitão", valor: 120 },
    { nome: "Coordenador", equivalencia: "Coronel", valor: 200 },
    { nome: "Coordenador-Geral", equivalencia: "Coronel", valor: 300 },
    { nome: "Superintendente", equivalencia: "General", valor: 500 },
    { nome: "Superintendente-Geral", equivalencia: "General", valor: 800 },
    { nome: "VIP", equivalencia: "Marechal", valor: 1000 },
    { nome: "Vice-Presidente", equivalencia: "Marechal", valor: 1500 },
    { nome: "Presidente", equivalencia: "Comandante", valor: 2500 },
    { nome: "Acionista Majoritário", equivalencia: "Comandante", valor: 3500 },
    { nome: "Chanceler", equivalencia: "Comandante-geral", valor: 5000 },
  ];

  const Avatar = ({ href, alt, style }) => {
    return <img src={href} alt={alt} style={style} />;
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    console.log("Função de rolagem chamada");
    const scrollElement = document.getElementById("scroll");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HomeContainer id="scroll">
      {/* <TopDivider /> */}

      {/* primeira seção */}
      <CargoSection id="section1">
        <Avatar
          href="https://sandbox.habbo.com/habbo-imaging/avatarimage?figure=hd-208-2-0.hr-828-61-0.ha-0-0.he-1605-110-0.ea-0-0.fa-0-0.ch-3880-1409-0.cc-3867-92-92.cp-0-0.ca-3412-92-0.lg-285-1428-0.sh-300-92-0.wa-0-0.&gender=M&size=l&direction=3&head_direction=3"
          style={{ marginRight: "60px" }}
        />
        <SectionInfo>
          <h2>Comece sua Jornada!</h2>
          <p>Esses são os primeiros passos para subir na hierarquia.</p>
          <Arrow href="#section2">
            <FaArrowDown />
          </Arrow>
        </SectionInfo>

        <CargoList>
          {cargos.slice(0, 8).map((cargo, index) => (
            <CargoItem key={index}>
              <h3>{cargo.nome}</h3>
              <p>Equivalência: {cargo.equivalencia}</p>
              <PriceTag>
                <FaCoins /> {cargo.valor} câmbios
              </PriceTag>
            </CargoItem>
          ))}
        </CargoList>
      </CargoSection>

      <CargoSection id="section2" reverse>
        <SectionInfo>
          <h2>Subindo na Hierarquia!</h2>
          <p>
            Agora você já tem mais responsabilidades e está em cargos estratégicos.
          </p>
          <Arrow href="#section3">
            <FaArrowDown />
          </Arrow>
        </SectionInfo>

        <Avatar
          href="https://sandbox.habbo.com/habbo-imaging/avatarimage?figure=hd-208-2-0.hr-828-61-0.ha-0-0.he-1605-110-0.ea-0-0.fa-0-0.ch-3880-1409-0.cc-3867-92-92.cp-0-0.ca-3412-92-0.lg-285-1428-0.sh-300-92-0.wa-0-0.&gender=M&size=l&direction=2&head_direction=3"
          alt="Avatar mostrando os primeiros cargos"
        />

        <CargoList>
          {cargos.slice(8, 16).map((cargo, index) => (
            <CargoItem key={index}>
              <h3>{cargo.nome}</h3>
              <p>Equivalência: {cargo.equivalencia}</p>
              <PriceTag>
                <FaCoins /> {cargo.valor} câmbios
              </PriceTag>
            </CargoItem>
          ))}
        </CargoList>
      </CargoSection>

      {/* terceira seção */}
      <CargoSection id="section3">
        <SectionInfo>
          <h2>O Topo da Elite!</h2>
          <p>Chegou a hora de fazer parte da alta cúpula da corporação.</p>
          <Arrow onClick={handleScrollToTop}>
            <FaArrowUp />
          </Arrow>
        </SectionInfo>
        <Avatar
          href="https://sandbox.habbo.com/habbo-imaging/avatarimage?figure=hd-208-2-0.hr-828-61-0.ha-0-0.he-1605-110-0.ea-0-0.fa-0-0.ch-3880-1409-0.cc-3867-92-92.cp-0-0.ca-3412-92-0.lg-285-1428-0.sh-300-92-0.wa-0-0.&gender=M&size=l&direction=4&head_direction=3"
          alt="Avatar mostrando os primeiros cargos"
        />
        <CargoList>
          {cargos.slice(16, 21).map((cargo, index) => (
            <CargoItem key={index}>
              <h3>{cargo.nome}</h3>
              <p>Equivalência: {cargo.equivalencia}</p>
              <PriceTag>
                <FaCoins /> {cargo.valor} câmbios
              </PriceTag>
            </CargoItem>
          ))}
        </CargoList>
      </CargoSection>
      <FooterContent>
        © 2025 ImLegen_ - Todos os direitos reservados | Desenvolvido por @Guerreiro (Contra sua vontade) 🤡
      </FooterContent>

    </HomeContainer>
  );
};

export default Home;
