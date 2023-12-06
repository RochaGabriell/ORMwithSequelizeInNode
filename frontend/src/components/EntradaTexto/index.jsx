import TextField from '@mui/material/TextField'
const styles = {
  '& label.Mui-focused': {
    color: '#885B3A'
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#885B3A'
    }
  }
}
export default function EntradaTexto({
  id,
  label,
  type,
  name,
  value,
  onChange
}) {
  return (
    <TextField
      required
      id={id}
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      sx={styles}
    />
  )
}
