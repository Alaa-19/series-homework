import { writeFileSync } from "node:fs";
import { loadData } from "./load.js";
import { addSeason } from "./series-service.js";

const { platform, series } = loadData();

const season = {
    number: 1,
    episodes: [
        {
            id: 801,
            title: "First Contact",
            rating: 8,
            duration: 44
        }
    ]
};

const updatedSeries = addSeason(series, 5, season);

const result = {
    platform,
    series: updatedSeries
};

writeFileSync(
    "series-updated.json",
    JSON.stringify(result, null, 2)
);