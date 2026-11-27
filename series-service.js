import { loadData } from "./load.js";

// A
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


// B    

export const getById=(series, id)=>
    {
            return series?.find(item=>item.id===id)
    }

export const getSeasonsCount = (series) =>
    {
        return series.map(item => ({
            title: item.title,
            seasons: item.seasons?.length ?? 0
        }));
    };
export const hasTopEpisode = (show, minRating) =>
{
    return show.seasons?.some(season =>
        season.episodes?.some(episode =>
            episode.rating >= minRating
        )
    ) ?? false;
};    

export const getCreatorsFrom=(series, country)=>
    {
        return series.filter(item=>
            item.creator.country===country).map(
               item=> item.creator.name )
        
    }

export const sortByStartYear = (series) =>
{
    return [...series].sort((a, b) => a.startYear - b.startYear);
};

 

 
