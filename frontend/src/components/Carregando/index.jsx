import { Box, CircularProgress, Typography } from '@mui/material'

export default function Carregando() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <CircularProgress sx={{ mb: 2 }} />
      <Typography variant="h6">Carregando...</Typography>
    </Box>
  )
}
