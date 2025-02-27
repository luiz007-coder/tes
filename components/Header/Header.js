import { useState } from "react";
import { useRouter } from "next/router";
import { FaTshirt, FaUserShield, FaDiscord, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { HeaderContainer, Nav, NavButton, IconWrapper, Logo, MobileMenu } from "./styled";

const Header = () => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navigateTo = (path) => {
		setMenuOpen(false); 
		document.body.style.transition = "opacity 1s ease-in-out";
		document.body.style.opacity = 0;
	
		setTimeout(() => {
			router.push(path);
			document.body.style.opacity = 1;
		}, 600);
	};

	const openExternalLink = (url) => {
		document.body.style.transition = "opacity 1s ease-in-out";
		document.body.style.opacity = 0;

		setTimeout(() => {
			window.open(url, "_blank");
			document.body.style.opacity = 1;
		}, 1000);
	};

	return (
		<HeaderContainer>
			<Logo>
				<img src="/images/habbo/legen-logo.png" alt="Logo" />
			</Logo>
			
			<MobileMenu onClick={toggleMenu}>
				{menuOpen ? <FaTimes /> : <FaBars />}
			</MobileMenu>
			
			<Nav className={menuOpen ? "open" : ""}>
				<NavButton active={router.pathname === "/"} onClick={() => navigateTo("/")}>  
					<IconWrapper><FaUserShield /></IconWrapper> Cargos
				</NavButton>
				<NavButton active={router.pathname === "/visuais"} onClick={() => navigateTo("/visuais")}>
					<IconWrapper><FaTshirt /></IconWrapper> Visuais
				</NavButton>
				<NavButton onClick={() => openExternalLink("https://discord.gg/VDdsQ62t")}>
					<IconWrapper><FaDiscord /></IconWrapper> Discord
				</NavButton>
				<NavButton onClick={() => openExternalLink("https://wa.me/553186955871")}>
					<IconWrapper><FaWhatsapp /></IconWrapper> WhatsApp
				</NavButton>
			</Nav>
		</HeaderContainer>
	);
};

export default Header;