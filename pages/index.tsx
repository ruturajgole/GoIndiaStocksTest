import DiscussionForum from "./discussion_forum";

type Props = {
  activeTab: string;
}

export default function Home({activeTab}: Props) {
  return (
    <DiscussionForum activeTab={activeTab}/>
  )
}