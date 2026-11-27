import { loadData } from "./load.js";

 export const getEpisodeTitle=(show, seasonIndex, episodeIndex)=>
{
    return show.seasons[seasonIndex].episodes[episodeIndex]
                                    .title;
};

export const getLastSeasonNumber=(show)=>
{
    return show?.seasons[show.seasons.length-1]?.number??0;

};


export const getNextSeasonYear=(show)=>
    {
        return show?.nextSeason?.year??"No announcement";

    }

   

 

 
