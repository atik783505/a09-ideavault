import { IdeaCard } from "./IdeaCard";


const TreandingIdeas = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/ideas/featured`)
    const ideas = await res.json()
    console.log(ideas)
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-[45px] text-center font-bold">Trending Ideas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
                {
                    ideas.map(idea => <IdeaCard idea={idea} key={idea._id}></IdeaCard>)
                }
            </div>
        </div>
    );
};

export default TreandingIdeas;