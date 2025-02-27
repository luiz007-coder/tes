import { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight, FiInfo } from "react-icons/fi";
import {
		PageContainer,
		TitleContainer,
		TitleText,
		OptionContainer,
		OptionItem,
		OptionHeader,
		IconWrapper,
		Arrow,
		ContentContainer,
		GenderSelector,
		GenderIcon,
		ContentWrapper,
		DualImageContainer,
		InfoText,
		InfoIcon,
		TopDivider,
} from "../../styles/styled-visual.js";

const options = [
	{
		name: "Olhos",
		icon: "/images/habbo/eyes.png",
		hasGender: true,
		images: {
			male: "/images/habbo/eyes-male.png",
			female: "/images/habbo/eyes-female.png",
		},
		info: true,
		description: "Rostos com barba só são permitidos para Sargentos/Trainees+.",
	},
	{
		name: "Cabelos",
		icon: "/images/habbo/hair-sn.png",
		hasGender: true,
		images: {
			male: "/images/habbo/hairs-male.png",
			female: "/images/habbo/hairs-female.png",
		},
		info: true,
		description: "Todos os cabelos do gênero masculino são autorizados para o gênero feminino.",
	},
	{
		name: "Chapéus",
		icon: "/images/habbo/hat.png",
		hasGender: false,
		image: "/images/habbo/hats.png",
		info: true,
		description: "A boina de cor vermelha é permitida somente aos policiais do Comando de Segurança Institucional.",
	},
	{
		name: "Adereços",
		icon: "/images/habbo/hair-accessorie.png",
		hasGender: false,
		image: "/images/habbo/hair-accessories.png",
		info: true,
		description: "O lenço é permitido somente aos militares pertencentes ao Grupamento de Ações Táticas Especiais.",
	},
	{
		name: "Óculos",
		icon: "/images/habbo/glasse.png",
		hasGender: false,
		image: "/images/habbo/glasses.png",
		info: false,
		description: "Os modelos acima só são permitidos nas seguintes cores: Cinza, Preto ou Branco.",
	},
	{
		name: "Barbas",
		icon: "/images/habbo/moustache.png",
		hasGender: false,
		image: "/images/habbo/bigodes.png",
		secondImage: "/images/habbo/unic-make.png",
		info: false,
		description: "Restrito apenas ao gênero masculino, define-se como modelo de barbas permitidas (para Sargento/Trainee+)",
		warning: "Liberado para todos os gêneros, define-se como modelo de barbas permitidas (para Comandante/VIP+).",
	},
	{
		name: "Blusas",
		icon: "/images/habbo/tops.png",
		hasGender: true,
		images: {
			male: "/images/habbo/tops-male.png",
			female: "/images/habbo/tops-female.png",
		},
		info: false,
		description: "Blusas masculinas e femininas.",
	},
	{
		name: "Jaquetas",
		icon: "/images/habbo/jacket.png",
		hasGender: false,
		image: "/images/habbo/jackets1.png",
		info: false,
		description: "A toga é permitida somente aos militares pertencentes à instância judicante da corporação, a Corregedoria.",
	},
	{
		name: "Acessórios",
		icon: "/images/habbo/accessorie.png",
		hasGender: false,
		image: "/images/habbo/accessories.png",
		secondImage: "/images/habbo/unic-accessories.png",
		info: false,
		description: "São reservadas duas medalhas VIP's para utilização exclusiva e específica dos policiais. A medalha de honra (dourada) só poderá ser utilizada quando concedidas pelo Alto Comando Supremo, enquanto a medalha cinza é uma honraria particular e opcional para destaques em premiações pré-definidas no Código de Conduta Militar.",
		warning: "A medalha de honraria particular deve ser utilizada na paleta de cores da sua Companhia quando a premiação for referente a isso. Nos casos de melhores oficiais/executivos da quinzena, a medalha deverá ser na cor amarela, representando o dourado.",
	},
	{
		name: "Calças",
		icon: "/images/habbo/bottoms-sn.png",
		hasGender: true,
		images: {
			male: "/images/habbo/bottom-male.png",
			female: "/images/habbo/bottom-female.png",
		},
		info: true,
		description: "Calças para os diferentes estilos.",
	},
	{
		name: "Cintos",
		icon: "/images/habbo/belt.png",
		hasGender: false,
		image: "/images/habbo/belts.png",
		secondImage: "/images/habbo/unic.png",
		info: true,
		description: "Define-se como modelo de cintos permitidos (para Comandante/VIP+).",
		warning: "O seguinte modelo de cinto, sendo preto e/ou branco, é permitido aos Soldados/Trainees+.",
	},
	{
		name: "Sapatos",
		icon: "/images/habbo/shoe.png",
		hasGender: false,
		image: "/images/habbo/shoes.png",
		info: true,
		description: "As sapatilhas, saltos altos e botas femininas são modelos de sapatos permitidos apenas ao gênero feminino.",
	},
];

const Visuais = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [gender, setGender] = useState("male");
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	const toggleOptions = () => {
		if (!showOptions && selectedOption) {
			setSelectedOption(null);
		}
		setShowOptions((prev) => !prev);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setShowOptions(false);
	};

	return (
		<PageContainer>
		{/* <TopDivider /> */}
			<TitleContainer>
				<TitleText onClick={toggleOptions}>
					Clique aqui, e encontre os visuais permitidos na RCC!
				</TitleText>
			</TitleContainer>

			{showOptions && (
				<OptionContainer>
					{options.map((option, index) => (
						<OptionItem key={index} onClick={() => handleOptionClick(option)}>
							<OptionHeader>
								<IconWrapper>
									<Image
										src={option.icon}
										alt={option.name}
										width={30}
										height={30}
									/>
								</IconWrapper>
								<span>{option.name}</span>
							</OptionHeader>
							<Arrow>
								<FiArrowRight />
							</Arrow>
						</OptionItem>
					))}
				</OptionContainer>
			)}
	<br></br>
			{selectedOption && (
				<ContentContainer
					wide={
						selectedOption.name === "Cabelos" || selectedOption.name === "Olhos"
					}
				>
					<h2>{selectedOption.name}</h2>
					{selectedOption.hasGender && (
						<GenderSelector>
							<GenderIcon
								active={gender === "male"}
								onClick={() => setGender("male")}
							>
								<Image
									src="/images/habbo/male.png"
									alt="Masculino"
									width={40}
									height={60}
									style={{ paddingTop: "15px" }}
								/>
							</GenderIcon>
							<GenderIcon
								active={gender === "female"}
								onClick={() => setGender("female")}
							>
								<Image
									src="/images/habbo/female.png"
									alt="Feminino"
									width={40}
									height={40}
								/>
							</GenderIcon>
						</GenderSelector>
					)}

					{/* Cabelos */}
					{selectedOption.name === "Cabelos" && (
						<ContentWrapper>
							<DualImageContainer isHairOrEyes>
								<Image
									src={selectedOption.images[gender]}
									alt={selectedOption.name}
									width={400}
									height={400}
								/>
								<div>
									<p>Versão Clássica</p>
									<Image
										src="/images/habbo/classic-hairs.png"
										alt="Versão Clássica"
										width={300}
										height={200}
									/>
									<p>Versão Beta</p>
									<br></br>
									<Image
										src="/images/habbo/beta-hairs.png"
										alt="Versão Beta"
										width={300}
										height={200}
									/>
								</div>
							</DualImageContainer>
							{/* Aviso secundário */}
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
									paddingBottom: "30px",
								}}
							>
								<InfoIcon
									style={{
										fontSize: "24px",
										color: "#1470AF",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FiInfo />
									<InfoText style={{ fontSize: "14px" }}>
										{selectedOption.description}
									</InfoText>
								</InfoIcon>
							</div>
						</ContentWrapper>
					)}

					{/* Olhos */}
					{selectedOption.name === "Olhos" && (
						<ContentWrapper>
							<DualImageContainer isHairOrEyes>
								<Image
									src={selectedOption.images[gender]}
									alt={selectedOption.name}
									width={300}
									height={300}
								/>
								<div>
									<p>Versão Clássica</p>
									<Image
										src="/images/habbo/classics.png"
										alt="Versão Clássica"
										width={300}
										height={200}
									/>
									<p>Versão Beta</p>
									<br></br>
									<Image
										src="/images/habbo/beta.png"
										alt="Versão Beta"
										width={300}
										height={200}
									/>
								</div>
							</DualImageContainer>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
									paddingBottom: "30px",
								}}
							>
								<InfoIcon
									style={{
										fontSize: "24px",
										color: "#1470AF",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FiInfo />
									<InfoText>{selectedOption.description}</InfoText>
								</InfoIcon>
							</div>
						</ContentWrapper>
					)}

					{/* Chapéus */}
					{selectedOption.name === "Chapéus" && (
						<ContentWrapper>
							<Image
								src={selectedOption.image}
								alt={selectedOption.name}
								width={400}
								height={300}
							/>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
									paddingBottom: "30px",
								}}
							>
								<InfoIcon
									style={{
										fontSize: "24px",
										color: "#1470AF",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FiInfo />
									<InfoText>{selectedOption.description}</InfoText>
								</InfoIcon>
							</div>
						</ContentWrapper>
					)}

					{/* Sapatos */}

					{selectedOption.name === "Adereços" && (
						<ContentWrapper>
							<Image
								src={selectedOption.image || selectedOption.images[gender]}
								alt={selectedOption.name}
								width={600}
								height={200}
								style={{ maxWidth: "100%", height: "auto" }}
							/>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
									paddingBottom: "30px",
								}}
							>
								<InfoIcon
									style={{
										fontSize: "24px",
										color: "#1470AF",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FiInfo />
									<InfoText>{selectedOption.description}</InfoText>
								</InfoIcon>
							</div>
						</ContentWrapper>
					)}

					{/* Blusas */}
					{selectedOption.name === "Blusas" && (
						<ContentWrapper>
							<Image
								src={selectedOption.images[gender]}
								alt={selectedOption.name}
								width={400}
								height={400}
							/>
						</ContentWrapper>
					)}

					{/* Calças */}
					{selectedOption.name === "Calças" && (
						<ContentWrapper>
							<Image
								src={selectedOption.images[gender]}
								alt={selectedOption.name}
								width={400}
								height={200}
								style={{ paddingLeft: '60px'}}
							/>
						</ContentWrapper>
					)}

					{/* Cintos */}
					{selectedOption.name === "Cintos" && (
						<ContentWrapper>
							{/* Aviso secundário */}
							<div
								style={{ display: "flex", alignItems: "center", gap: "15px" }}
							>
								<InfoIcon
									style={{
										fontSize: "24px",
										color: "#1470AF",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FiInfo />
									<InfoText>{selectedOption.description}</InfoText>
								</InfoIcon>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Image
									src={selectedOption.image}
									alt={selectedOption.name}
									width={400}
									height={100}
								/>

								<div
									style={{ display: "flex", alignItems: "center", gap: "15px" }}
								>
									<InfoIcon
										style={{
											fontSize: "24px",
											color: "#1470AF",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<FiInfo />
										<InfoText>{selectedOption.warning}</InfoText>
									</InfoIcon>
								</div>
								<Image
									src={selectedOption.secondImage}
									width={100}
									height={100}
								/>
							</div>
						</ContentWrapper>
					)}

					{/* Sapatos */}
					{selectedOption.name === "Sapatos" && (
						<ContentWrapper>
							<Image
								src={selectedOption.image || selectedOption.images[gender]}
								alt={selectedOption.name}
								width={400}
								height={400}
							/>
							{/* Aviso secundário */}
							<div
								style={{ display: "flex", alignItems: "center", gap: "15px" }}
							>
								<InfoIcon
									style={{
										fontSize: "24px",
										color: "#1470AF",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FiInfo />
									<InfoText>{selectedOption.description}</InfoText>
								</InfoIcon>
							</div>
						</ContentWrapper>
					)}

					{selectedOption.name === "Barbas" && (
						<ContentWrapper>
							{/* Aviso secundário */}
							<div
								style={{ display: "flex", alignItems: "center", gap: "15px" }}
							>
								<InfoIcon
									style={{
										fontSize: "24px",
										color: "#1470AF",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FiInfo />
									<InfoText>{selectedOption.description}</InfoText>
								</InfoIcon>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Image
									src={selectedOption.image}
									alt={selectedOption.name}
									width={400}
									height={100}
								/>

								
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "15px",
										paddingTop: "50px",
									}}
								>
									<InfoIcon
										style={{
											fontSize: "24px",
											color: "#1470AF",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<FiInfo />
										<InfoText>{selectedOption.warning}</InfoText>
									</InfoIcon>
								</div>
								<Image
									src={selectedOption.secondImage}
									width={100}
									height={100}
								/>
							</div>
						</ContentWrapper>
					)}

					{/* Jaquetas */}
					{selectedOption.name === "Jaquetas" && (
						<ContentWrapper>
							<Image
								src={selectedOption.image}
								alt={selectedOption.name}
								width={400}
								height={600}
							/>
							{/* Aviso secundário */}
							<div
								style={{ display: "flex", alignItems: "center", gap: "15px" }}
							>
								<InfoIcon
									style={{
										fontSize: "24px",
										color: "#1470AF",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FiInfo />
									<InfoText>{selectedOption.description}</InfoText>
								</InfoIcon>
							</div>
						</ContentWrapper>
					)}

					{/* Cintos */}
					{selectedOption?.name === "Acessórios" && (
						<ContentWrapper>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Image
									src={selectedOption.image}
									alt={selectedOption.name}
									width={600}
									height={300}
									style={{ maxWidth: "100%", height: "auto" }}
								/>
								<div
									style={{
										display: "flex",
										alignItems: "justify",
										gap: "15px",
									}}
								>
									<InfoIcon>
										<InfoText>{selectedOption.warning}</InfoText>
									</InfoIcon>
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "justify",
										gap: "15px",
										paddingTop: "20px",
									}}
								>
									<InfoIcon>
										<InfoText>{selectedOption.warning}</InfoText>
									</InfoIcon>
								</div>
								<Image
									src={selectedOption.secondImage}
									width={100}
									height={100}
								/>
							</div>
						</ContentWrapper>
					)}
					{selectedOption.name === "Óculos" && (
						<ContentWrapper>
							<Image
								src={selectedOption.image}
								alt={selectedOption.name}
								width={400}
								height={300}
							/>
							{/* Aviso secundário */}
							<div
								style={{ display: "flex", alignItems: "center", gap: "15px" }}
							>
								<InfoIcon
									style={{
										fontSize: "24px",
										color: "#1470AF",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FiInfo />
									<InfoText>{selectedOption.description}</InfoText>
								</InfoIcon>
							</div>
						</ContentWrapper>
					)}
				</ContentContainer>
			)}
		</PageContainer>
	);
};

export default Visuais;
