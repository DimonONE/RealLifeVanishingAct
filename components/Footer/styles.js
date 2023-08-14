const footer = {
  flexDirection: 'row',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: 100,
  paddingTop: 10,
  paddingLeft: 20,
  paddingRight: 20,
  justifyContent: 'space-between',
}

const fontFamilyKanit = {
  fontFamily: 'Kanit',
}

const title = {
  fontSize: 20,
  color: '#81ADC0',
  ...fontFamilyKanit,
}

const countPlayers = {
  fontSize: 20,
  color: '#9C63F7',
  ...fontFamilyKanit,
}

const timeContainer = {
  width: 140,
  alignItems: 'center',
  justifyContent: 'center',
}

const time = {
  ...title,
  fontSize: 30,
}

const name = {
  width: 100,
  alignItems: 'center',
}
const players = {
  ...name,
}

export const styles = {
  footer,
  title,
  countPlayers,
  timeContainer,
  time,
  name,
  players,
}
