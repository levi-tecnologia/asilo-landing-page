import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Menu, Button, AppBar, Toolbar, IconButton, Paper, Grid, Container, Box, Typography, MenuItem} from '@mui/material'
import PixIcon from '@mui/icons-material/Pix';
import MapIcon from '@mui/icons-material/Map';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {

	const [IS_MOBILE, setIsMobile] = useState(false)
	useEffect(() => {
		let IS_MOBILE = null
		if (typeof window !== 'undefined') {
			IS_MOBILE = window.screen.width < 400
		}
		setIsMobile(IS_MOBILE)
	}, [])

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const links = [
		{link: '#historia', label: 'História'},
		{link: '#servicos', label: 'Serviços'},
		{link: '#irmao', label: 'Irmão Joaquim'},
		{link: '#ajudar', label: 'Ajudar'},
		{link: '#contatos', label: 'Contatos'},
	];

	const colorYellow = '#ffffe8'

	return (
		<Box sx={{bgcolor: '#f5f5f5', minHeight: '100vh', pb: 0}}>

			<AppBar color='white' position="fixed">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{links.map((link) => (
									<a href={`${link.link}`}>
										<MenuItem key={link.link} onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{link.label}</Typography>
										</MenuItem>
									</a>
								))}
							</Menu>
						</Box>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Box sx={{display: 'flex', flexGrow: 1}} />
							{links.map((link) => (
								<a href={`${link.link}`}>
									<Typography color='#000000' key={link.link} onClick={handleCloseNavMenu} sx={{ ml: 2, color: 'white', display: 'block' }} >
										{link.label}
									</Typography>
								</a>
							))}
						</Box>

					</Toolbar>
				</Container>
			</AppBar>

			<Head>
				<title>Asilo Irmão Joaquim</title>
				<meta name="description" content="Asilo Irmão Joaquim" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box sx={{mt: 8, bgcolor: colorYellow, minHeight: '100px', p: IS_MOBILE ? 0 : 2, pt: 2}}>
				<Box sx={{display: 'flex', justifyContent: 'center'}}>
					<img src={'logo.png'} height='auto' width='160px' />
				</Box>
			</Box>

			<Box sx={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500px', 
				display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundImage: "url('asilo2.webp')"}}>

				<Box sx={{p:1, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: '16px', width: '500px'}}>
					<Typography align={'center'} fontSize={IS_MOBILE ? 42 : 50} sx={{color: '#375e43'}} fontWeight={700}>
						Asilo Irmão Joaquim
					</Typography>
				</Box>

				<Box sx={{mt: 1, p:1, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: '16px', width: '350px'}}>
					<Typography fontSize={18} sx={{color: '#3b6548'}} fontWeight={700} align='center'>
						Um Lar de Amor e Carinho para Idosos
					</Typography>
				</Box>

			</Box>

			<Box id='historia' sx={{bgcolor: '#376d7b', minHeight: '100px', p: IS_MOBILE ? 0 : 2, pt: 8}}>
				<Container>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={6} align={IS_MOBILE ? 'center' : 'right'}>
							<Box sx={{height: '400px', display: 'flex', alignItems: 'center'}}>
								<Box sx={{ml: IS_MOBILE ? 0 : 4}}>
									<Typography color='#FFFFFF' fontSize={36} fontWeight={700}>
										História do asilo
									</Typography>
									<Typography color='#FFFFFF' fontSize={20}>
										O Asilo Irmão Joaquim é uma instituição filantrópica que há mais de 120 anos oferece assistência a idosos carentes em Florianópolis, Santa Catarina. Fundado em 1902 por amigos católicos frequentadores da Catedral Metropolitana da cidade, o asilo leva o nome de Joaquim Francisco da Costa, um florianopolitano que realizou inúmeras caridades pelo mundo.
									</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} align={IS_MOBILE ? 'center' : 'left'}>
							<img src={'imagem1.1.webp'} height={IS_MOBILE ? '200px' : '400px'} width='auto' style={{borderRadius: '16px'}} />
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box id='servicos' sx={{bgcolor: colorYellow, minHeight: '100px', p: IS_MOBILE ? 0 : 2, pt: 8}}>
				<Container>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={6} align={IS_MOBILE ? 'center' : 'right'}>
							<img src={'imagem2.1.webp'} height={IS_MOBILE ? '200px' : '400px'} width='auto' style={{borderRadius: '16px'}} />
						</Grid>
						<Grid item xs={12} sm={6} align={IS_MOBILE ? 'center' : 'left'}>
							<Box sx={{mt: IS_MOBILE ? 2 : 0, height: IS_MOBILE ? 'auto' : '400px', display: 'flex', alignItems: 'center'}}>
								<Box sx={{ml: IS_MOBILE ? 0 : 4}}>
									<Typography color='#000000' fontSize={36} fontWeight={700}>
										Nossos Serviços
									</Typography>
									<Typography color='#000000' fontSize={16}>
										Atualmente, o asilo abriga 39 idosos, sendo 18 homens e 21 mulheres. A idade dos residentes varia entre 62 e 95 anos. Além do abrigo, o asilo oferece seis refeições diárias, atendimento médico, fisioterapia e atividades de lazer.
									</Typography>
									<Typography color='#000000' fontSize={16} mt={1}>
										O Asilo Irmão Joaquim é uma entidade reconhecida pela sua qualidade de atendimento e dedicação aos idosos. Ao longo dos anos, foi agraciada com diversos títulos e honrarias pelos serviços prestados à comunidade florianopolitana.
									</Typography>
									<Typography color='#000000' fontSize={16} mt={1}>
										O Asilo Irmão Joaquim é uma entidade reconhecida pela sua qualidade de atendimento e dedicação aos idosos. Ao longo dos anos, foi agraciada com diversos títulos e honrarias pelos serviços prestados à comunidade florianopolitana.
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box id='irmao' sx={{bgcolor: '#376d7b', minHeight: '100px', p: IS_MOBILE ? 0 : 2, pt: 8}}>
				<Container>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={8} align={IS_MOBILE ? 'center' : 'right'}>
							<Box sx={{height: IS_MOBILE ? 'auto' : '500px', display: 'flex', alignItems: 'center'}}>
								<Box sx={{mr: IS_MOBILE ? 0 : 4}}>
									<Typography color='#FFFFFF' fontSize={36} fontWeight={700}>
										Quem foi Irmão Joaquim
									</Typography>

									<Typography color='#FFFFFF' fontSize={16} mt={1}>
										Joaquim Francisco da Costa nasceu em Florianópolis em 20 de março de 1761. Era o sexto dos nove filhos de Francisco Tomaz da Costa e Mariana Jacinta da Vitória, açorianos que chegaram à Ilha de Santa Catarina em 1749.
									</Typography>

									<Typography color='#FFFFFF' fontSize={16} mt={1}>
										Durante a adolescência, Joaquim sonhava ser sacerdote. No entanto, seu pai, que era comerciante, decidiu que ele deveria assumir os negócios da família. Joaquim acatou a decisão, mas continuou a conciliar a administração com a vida religiosa .
									</Typography>

									<Typography color='#FFFFFF' fontSize={16} mt={1}>
										Após a morte dos pais, Joaquim abandonou os negócios e partiu para realizar caridades pelo mundo. Usava batina, pedia esmolas para os pobres e desejava ser padre, sonho que não alcançou. Também participou da fundação da Santa Casa de Misericórdia, em Porto Alegre.
									</Typography>

									<Typography color='#FFFFFF' fontSize={16} mt={1}>
										Irmão Joaquim morreu em 1829, aos 68 anos, na França, enquanto aguardava uma embarcação para retornar ao Brasil.
									</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4} align={IS_MOBILE ? 'center' : 'left'}>
							<img src={'irmao.jpg'} width={IS_MOBILE ? 'auto' : '300px'} height={IS_MOBILE ? '400px' : 'auto'} style={{borderRadius: '16px'}}/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box id='ajudar' sx={{bgcolor: colorYellow, minHeight: '100px', p: IS_MOBILE ? 0 : 2, pt: IS_MOBILE ? 2 : 8}}>
				<Container>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={6} align={IS_MOBILE ? 'center' : 'right'}>
							<Box sx={{height: IS_MOBILE ? '250px' : '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
								<img src={'imagem5.1.webp'} height={IS_MOBILE ? '200px' : '400px'} width='auto' style={{borderRadius: '16px'}} />
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} align={IS_MOBILE ? 'center' : 'left'}>
							<Box sx={{height: IS_MOBILE ? 'auto' : '400px', display: 'flex', alignItems: 'center'}}>
								<Box sx={{ml: IS_MOBILE ? 0 : 4}}>
									<Typography color='#000000' fontSize={24} fontWeight={700}>
										Manuteção
									</Typography>
									<Typography color='#000000' fontSize={18} mt={1}>
										As despesas do asilo são financiadas basicamente por renda própria da Associação Irmão Joaquim, doações de pessoas físicas e jurídicas e participação dos residentes com condições de pagamento.
									</Typography>

									<Typography color='#000000' fontSize={24} fontWeight={700} mt={2}>
										Como Ajudar
									</Typography>
									<Typography color='#000000' fontSize={18} mt={1}>
										Para colaborar com o Asilo Irmão Joaquim, você pode fazer uma doação em dinheiro ou em bens, como alimentos, roupas ou medicamentos. Também pode participar de eventos e campanhas de arrecadação.
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box id='contatos' sx={{bgcolor: '#376d7b', minHeight: '100px', p: IS_MOBILE ? 0 : 2, pb: 6}}>
				<Container>
					<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

						<a href='https://maps.app.goo.gl/pTDfKgPdarVgm4E5A' target='_blanck'>
							<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
								<IconButton color='white'>
									<LocationOnIcon sx={{mr: 1}} /> 
								</IconButton>
							</Box>
						</a>

						<a href='tel:4832227544' target='_blanck'>
							<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
								<IconButton color='white'>
									<PhoneIcon color='white' sx={{mr: 1}} /> 
								</IconButton>
							</Box>
						</a>

						<a href='https://www.instagram.com/asiloirmao/' target='_blanck'>
							<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
								<IconButton color='white'>
									<InstagramIcon color='#ffffff' sx={{mr: 1}} /> 
								</IconButton>
							</Box>
						</a>

						<a href='https://api.whatsapp.com/send?phone=5548998005347' target='_blanck'>
							<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
								<IconButton color='white'>
									<WhatsAppIcon color='#ffffff' sx={{mr: 1}} /> 
								</IconButton>
							</Box>
						</a>

						<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
							<IconButton color='white'>
								<PixIcon color='#ffffff' sx={{mr: 1}} /> 
							</IconButton>
						</Box>

					</Box>
				</Container>
			</Box>

		</Box>
	)
}
