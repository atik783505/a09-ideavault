import Banner from "@/components/Banner";
import IdeaVaultFeatures from "@/components/IdeaVault1";
import ShareIdeaBox from "@/components/IdeaVault2";
import TreandingIdeas from "@/components/TreandingIdeas";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TreandingIdeas></TreandingIdeas>
      <IdeaVaultFeatures></IdeaVaultFeatures>
      <ShareIdeaBox></ShareIdeaBox>
    </div>
  );
}
