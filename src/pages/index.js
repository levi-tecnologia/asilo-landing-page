import React from 'react'
import Head from 'next/head'
import {Paper, Grid, Container, Box, Typography} from '@mui/material'
import PixIcon from '@mui/icons-material/Pix';
import MapIcon from '@mui/icons-material/Map';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Home() {
	return (
		<Box sx={{bgcolor: '#f5f5f5', minHeight: '100vh', pb: 16}}>
			<Head>
				<title>Asilo Irmão Joaquim</title>
				<meta name="description" content="Asilo Irmão Joaquim" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<img src={'logo.png'} height='auto' width='400px' />
			</Box>

			<Box sx={{bgcolor: '#e4efe8', minHeight: '100px', p: 2,}}>
				<Container>
					<Grid container spacing={1}>
						<Grid item xs={12} sx={{display: {sm: 'none', xs: 'flex'}, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
							<img src={'asilo2.webp'} width='400px' height='auto' style={{borderRadius: '16px'}} />
							<Typography color='gray' fontSize={10}>
								Asilo Irmão Joaquim – Foto: Billy Culleton
							</Typography>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Box sx={{p: 2}}>
								<Typography color='primary' fontWeight={700} fontSize={30}>
									Asilo Irmão Joaquim
								</Typography>
								<Typography color='primary' mt={1}>
									Uma instituição filantrópica que dá assistência a idosos carentes, esse é o Asilo Irmão Joaquim fundado em 1902 por católicos da Catedral Metropolitana e maçons. O nome do asilo é uma homenagem a Joaquim Francisco da Costa, florianopolitano que realizou inúmeras caridades pelo mundo.
								</Typography>
								<Typography color='primary' mt={1}>
									Abriga atualmente 22 homens e 14 mulheres com idades variando entre 60 e 98 anos. Além do abrigo, são fornecidas seis refeições diárias, atendimento médico, fisioterapia e atividades de lazer.
								</Typography>
								<Typography color='primary' mt={1}>
									A entidade possui toda documentação necessárias pra seu funcionamento. Ao longo dos anos foi agraciada com diversos títulos e honrarias pelos serviços prestados à comunidade florianopolitana.
								</Typography>
							</Box>
						</Grid>

						<Grid item xs={12} sm={6} sx={{display: {sm: 'flex', xs: 'none'}, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
							<img src={'asilo2.webp'} width='600px' height='auto' style={{borderRadius: '16px'}}/>
							<Typography color='gray' fontSize={10}>
								Asilo Irmão Joaquim – Foto: Billy Culleton
							</Typography>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper sx={{p: 2, borderRadius: '16px'}}>
								<Typography color='primary' fontWeight={700} fontSize={30}>
									Quem foi Irmão Joaquim
								</Typography>

								<Typography color='primary'>
									<img src={'irmao.jpg'} width='auto' height='auto' style={{float: 'left', borderRadius: '16px', marginRight: '8px'}}/>
									Joaquim Francisco da Costa é o sexto dos nove filhos de Francisco Tomaz da Costa e Mariana Jacinta da Vitória, açorianos que chegaram à Ilha de Santa Catarina em 1749. Joaquim nasceu em 20 de março de 1761, em plena sexta-feira santa em Florianópolis, na época chamada de Desterro.
									<Typography color='primary' mt={1}>
										Durante a adolescência sonhava ser sacerdote, mas como tinha aptidão para administração, seu pai resolveu que ele seria responsável por “cuidar” da empresa da família. Joaquim acatou a decisão do pai, mas resolveu conciliar a administração com a vida de monge voluntário. Passou então a ser chamado de Irmão Joaquim do Livramento.
									</Typography>
								</Typography>

								<Typography color='primary' mt={1}>
									Após a morte dos pais, abandona a empresa e parte para realizar caridades pelo mundo. Usava batina, pedia esmolas para os pobres e desejava ser padre, sonho que não alcançado. Também participou da fundação da Santa Casa de Misericórdia, em Porto Alegre. Após inúmeras caridades, Irmão Joaquim morreu em 1829, aos 68 anos na França enquanto aguardava uma embarcação para retornar ao Brasil.
								</Typography>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper sx={{p: 2, borderRadius: '16px'}}>
								<Typography color='primary' fontWeight={700} fontSize={30}>
									Manutenção
								</Typography>

								<Typography color='primary' mt={1}>
									As despesas do asilo, que conta com 30 funcionários fixos e três profissionais voluntários, são financiadas basicamente por renda própria da Associação Irmão Joaquim, doações, convênios e uma pequena participação dos abrigados com condições de pagamento.
								</Typography>

							</Paper>

							<Paper sx={{mt: 1, p: 2, borderRadius: '16px'}}>
								<Typography color='primary' fontWeight={700} fontSize={30}>
									Como Ajudar
								</Typography>

								<Typography color='primary' mt={1}>
									Para colaborar você pode entregar as doações na secretaria do asilo na Avenida Mauro Ramos, 901, Centro, Florianópolis. 
								</Typography>

								<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
									<PixIcon color='success' sx={{mr: 1}} /> 
									<Typography color='primary'>
										Chave Pix: asilo@hospitalcarloscorrea.com.br
									</Typography>
								</Box>

								<a href='https://maps.app.goo.gl/pTDfKgPdarVgm4E5A' target='_blanck'>
									<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
										<MapIcon color='info' sx={{mr: 1}} /> 
										<Typography color='primary'>
											Google Maps
										</Typography>
									</Box>
								</a>

								<a href='tel:4832227544' target='_blanck'>
									<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
										<PhoneIcon color='primary' sx={{mr: 1}} /> 
										<Typography color='primary'>
											Telefone: (48) 3222-7544
										</Typography>
									</Box>
								</a>

								<a href='https://www.instagram.com/asiloirmao/' target='_blanck'>
									<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
										<InstagramIcon color='primary' sx={{mr: 1}} /> 
										<Typography color='primary'>
											Instagram asiloirmao
										</Typography>
									</Box>
								</a>

								<a href='https://api.whatsapp.com/send?phone=5548998005347' target='_blanck'>
									<Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
										<WhatsAppIcon color='success' sx={{mr: 1}} /> 
										<Typography color='primary'>
											WhatsApp 48 9 9800-5347
										</Typography>
									</Box>
								</a>



							</Paper>

						</Grid>

					</Grid>
				</Container>
			</Box>

		</Box>
	)
}
