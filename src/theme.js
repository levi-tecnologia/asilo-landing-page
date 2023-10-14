import { createTheme } from '@mui/material/styles';
import { ptBR /*, enUS, esES*/ } from '@mui/material/locale';
  
const borderRadius = '8px'
const theme = createTheme({
	spacing: 8,
	shape: {
		borderRadius: 3,
	},
	components: {
		MuiAlert: {
			styleOverrides: {
				root: {
					alignItems: 'center'
				}
			}
		},
		MuiButton: {
			defaultProps: {
				size: 'large',
				sx: {
					':hover': {
						bgcolor: undefined
					}
				}
			},
			styleOverrides: {
				root: {
					borderRadius,
					':hover': {
						backgroundColor: undefined,
						boxShadow: '0 0 0 0',
					},
					boxShadow: '0 0 0 0',
				},
				text: {
					fontWeight: 'normal',
					textTransform: 'none',
					borderRadius,
					':hover': {
						backgroundColor: undefined,
					}
				},
				contained: {
					':hover': {
						backgroundColor: undefined,
					},
					textTransform: 'none',
					fontWeight: 'bold',

				},
				outlined: {
					':hover': {
						backgroundColor: undefined,
					},
					textTransform: 'none',
					fontWeight: 'bold',
				}
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					':hover': {
						background: undefined,
					}
				}
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {

				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				rounded: {
					borderRadius
				},
				root: {
					boxShadow: 'none',
				}
			},
			defaultProps: {
				elevation: 1,
			},
		},
		MuiCard: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				root: {
					borderRadius,
					border: '1px solid #ececec',
					background: '#fafafa',
					padding: 3,
					color: '#000',
					'& .MuiCardContent-root:last-child ': {
						paddingBottom: '16px'
					}
				}
			},
		},
		MuiDialog: {
			defaultProps: {
				disablePortal: true,
				maxWidth: 'sm',
				fullWidth: true,
			}
		},
		MuiTextField: {
			defaultProps: {
				color: 'primary',
				variant: 'outlined'
			},
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.variant === 'outlined' && {
						'& .MuiOutlinedInput-root': {
							backgroundColor: '#EDEFED',
							borderRadius,
						},  
						fontWeight: 'normal',
						'& input, textarea': {
							color: '#333',
							fontWeight: 'normal'
						},
						'& label': {
							color: '#333',
							fontWeight: 'normal'
						},
						'& fieldset': {
							border: '1px solid #EDEFED',
							borderRadius ,
						},
						':focus-visible': {
							'& fieldset': {
								borderColor: '#ccc !important'
							}
						},
						':focus-within': {
							'& label': {
								color: '#333'
							},
							'& fieldset': {
								borderColor: '#ccc !important'
							}
						},
						':focus': {
							'& fieldset': {
								borderColor: '#ccc !important'
							}
						},
						':hover': {
							'& fieldset': {
								borderColor: '#ccc !important',
								// web
							}
						},
						'& .Mui-disabled.MuiInputBase-root fieldset' : {
							border: 0
						},
						'& .Mui-disabled.MuiInputBase-root': {
							backgroundColor: '#c5c4c4',
							borderRadius,
							border: 0,
						},
						'& .MuiFormLabel-root': {
							color: '#888'
						},
						'& .MuiInputLabel-shrink': {
							color: '#333'
						},
						// borderBlock,
					}),
				}),
			},

		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					borderRadius: '0 !important'
				}
			},
			defaultProps: {
				sx: {
					borderRadius: '0 !important'
				}
			}
		}

	}
}, ptBR) 

export default theme;
