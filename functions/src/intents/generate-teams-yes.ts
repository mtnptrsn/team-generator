import { humanizeArray, shuffleArray } from '../utils'
import { sounds } from '../data'

export default (request) => agent => {
  const outputContexts = request.body.queryResult.outputContexts
  const outputContext = outputContexts.find(oc => oc.name.includes('generateteams-followup'))
  
  const people = shuffleArray(outputContext.parameters['given-name']
    .map(name => Object.keys(name).map((key) => name[key])[0]))

  const teamOne = people.slice(0, people.length / 2)
  const teamTwo = people.slice(people.length / 2, people.length)

  const drumRollTag = `<audio src="${sounds.drumRoll}">audio was not found</audio>`

  agent.add(`
    <speak>
      In the first team we have
      ${humanizeArray(teamOne)}
      <break time="1s" />
      And in the second team we have
      ${humanizeArray(teamTwo)}
      <break time="1s" />
      Good luck and have fun!
    </speak>
  `)
}