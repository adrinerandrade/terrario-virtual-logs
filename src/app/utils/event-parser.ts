import { Event, EventType, PlantedEvent, RemovedEvent, DiedEvent } from '../model/events';

const PARSERS = {
  [EventType.PLANT_PLANTED]: parsePlantPlanted,
  [EventType.PLANT_REMOVED]: parsePlantRemoved,
  [EventType.PLANT_DIED]: parsePlantDied,
}

export function parseEvents(value: any): Event[] {
  if (!value) {
    return null;
  }
  return JSON.parse(value.messages).Items.map(rawEvent => {
    const { type, data } = JSON.parse(rawEvent);
    const parser = PARSERS[type];
    if (!parser) throw Error(`Unknown event type: ${type}`);

    return parser(type, data);
  });

}

function parsePlantPlanted(type, data) {
  return {
    type: type,
    name: data.Items[0]
  } as PlantedEvent;
}

function parsePlantRemoved(type, data) {
  return {
    type: type,
    name: data.Items[0]
  } as RemovedEvent;
}

function parsePlantDied(type, data) {
  const deadData = JSON.parse(data.Items[1]);
  return {
    type,
    name: data.Items[0],
    temperature: deadData.TEMPERATURE,
    airHumidity: deadData.AIR_HUMIDITY,
    soilHumidity: deadData.SOIL_HUMIDITY,
    soilNutrients: deadData.SOIL_NUTRIENTS
  } as DiedEvent;
}
