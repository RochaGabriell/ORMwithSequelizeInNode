import Button from '@mui/material/Button'
import { Box } from '@mui/material'

export default function Botao({ title, onClick }) {
  return (
    <Box
      sx={{
        padding: 2
      }}
    >
      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: '#885B3A',
          color: 'white',
          '&:hover': {
            backgroundColor: '#FFA500'
          }
        }}
        type="submit"
        onClick={onClick}
      >
        {title}
      </Button>
    </Box>
  )
}
