export const formatTime = (time) => {
    const parsedTime = Date.parse(time)
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium'}).format(parsedTime)
  }