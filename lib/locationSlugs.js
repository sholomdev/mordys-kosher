import fs from 'fs';
import path from 'path';
import { API_URL } from '../config';

async function fetchLocationData() {
  console.log('Fetching location data...');
  const resLocations = await fetch(`${API_URL}/locations`);
  const locations = await resLocations.json();

  return locations.map((location) => ({
    slug: location.slug,
    name: location.name,
    id: location.id,
  }));
}

const LOCATIONS_CACHE_PATH = '.locations';

export default async function getLocationSlugs() {
  let cachedData;

  try {
    cachedData = JSON.parse(
      fs.readFileSync(path.join(__dirname, LOCATIONS_CACHE_PATH), 'utf8')
    );
  } catch (error) {
    console.log('Location cache not initialized');
  }

  if (!cachedData) {
    const data = await fetchLocationData();

    try {
      fs.writeFileSync(
        path.join(__dirname, LOCATIONS_CACHE_PATH),
        JSON.stringify(data),
        'utf8'
      );
      console.log('Wrote to locations cache');
    } catch (error) {
      console.log('ERROR WRITING LOCATIONS CACHE TO FILE');
      console.log(error);
    }

    cachedData = data;
  }

  return cachedData;
}
