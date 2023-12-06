const styles = {
  container: {
    backgroundImage: `url(/imagens/background.gif)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 4rem)',
    margin: 0,
    padding: 0
  },
  paper: {
    padding: 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '2px 2px 5px 0 rgba(0, 0, 0, 0.5)'
  },
  title: {
    marginBottom: 2
  },
  registroLink: {
    textDecoration: 'none',
    color: '#885B3A',
    fontWeight: 'bold',
    marginTop: 2
  },
  form: {
    width: '100%',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  submitButton: {
    marginTop: '20px'
  },
  errorMessage: {
    color: 'red'
  }
}
export default styles
