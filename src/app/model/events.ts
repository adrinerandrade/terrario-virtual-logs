export enum EventType {

  PLANT_PLANTED = "PLANT_PLANTED",
  PLANT_REMOVED = "PLANT_REMOVED",
  PLANT_DIED = "PLANT_DIED"

}

export type Event =
  PlantedEvent |
  RemovedEvent |
  DiedEvent;

interface BaseEvent {
  type: EventType,
}

export interface PlantedEvent extends BaseEvent {
  name: string,
}

export interface RemovedEvent extends BaseEvent {
  name: string,
}

export interface DiedEvent extends BaseEvent {
  name: string,
  temperature: number,
  airHumidity: number,
  soilNutrients: number,
  soilHumidity: number
}

function isPlantedEvent(obj): obj is PlantedEvent {
  return obj && obj.type && obj.type == EventType.PLANT_PLANTED;
}
function isRemovedEvent(obj): obj is RemovedEvent {
  return obj && obj.type && obj.type == EventType.PLANT_REMOVED;
}
function isDiedEvent(obj): obj is DiedEvent {
  return obj && obj.type && obj.type == EventType.PLANT_DIED;
}
export const eventTypeVerifier = {
  isPlantedEvent,
  isRemovedEvent,
  isDiedEvent
}
