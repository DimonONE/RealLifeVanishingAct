
const container = {
  backgroundColor: '#1F2A3C',
  height: '100%',
  alignItems: 'center',
}

const content = {
  marginTop: '60%',
}

const inputContainer = {
  marginBottom: 25
}

const title = {
  color: '#81ADC0',
  fontSize: 24,
}

const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: -0.7,
    height: -0.7,
  },
  shadowOpacity: 0.1,
  shadowRadius: 20,
  elevation: 7,
};

const input = {
  width: 248,
  height: 60,
  marginTop: 10,
  paddingLeft: 20,
  paddingRight: 20,
  fontSize: 20,
  color: '#887DC1',
  backgroundColor: '#263245',
  ...shadowStyle
}


const submit = {
  width: 166,
  height: 60,
  paddingLeft: 20,
  paddingRight: 20,
  marginTop: 45,
  marginLeft: 'auto',
  marginRight:'auto',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#8278B9',
  borderStyle: 'solid',

  backgroundColor: 'rgba(156, 99, 247, 0.21)',
  boxShadow: '4px 4px 10px 0px #131C2B, -4px -4px 10px 0px #2B3649',
}


export const styles = {
  title,
  container,
  content,
  inputContainer,
  input,
  submit
}
