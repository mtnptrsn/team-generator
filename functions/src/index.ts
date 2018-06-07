process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

import * as functions from 'firebase-functions'
import { WebhookClient } from 'dialogflow-fulfillment'
import generateTeams from './intents/generate-teams'
import generateTeamsConfirmed from './intents/generate-teams-yes'

export const dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response })

  const intentMap = new Map()
  intentMap.set('generateTeams', generateTeams(request))
  intentMap.set('generateTeams_yes', generateTeamsConfirmed(request))
  agent.handleRequest(intentMap)
})


// John, Nicola, James, Oscar