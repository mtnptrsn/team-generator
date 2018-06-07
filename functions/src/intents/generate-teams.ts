import { humanizeArray } from '../utils'

export default (request) => agent => {
  const people = request.body.queryResult.parameters['given-name'].map(name => Object.keys(name).map((key) => name[key])[0])

  // agent.add('The webhook is working.')
  agent.add(`
    <speak>
      Okay, I heard ${humanizeArray(people)}.
      Is that correct?
    </speak>
  `)
}