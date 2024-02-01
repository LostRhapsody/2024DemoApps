import 

export default defineEventHandler(event => {
  const program = getRouterParam(event, 'program')

  return `Running ${program}!`
})
