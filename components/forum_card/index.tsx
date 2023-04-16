export default function Card ({comment, sectors}){
  return <div className="flex flex-col items-center bg-white mt-5 p-5 rounded-md shadow-xl">
    <p className="text-sm text-blue-700 self-end">{comment.timeStamp}</p>
    {comment.image && <img src={comment.image} className="object-contain px-10 w-3/4 justify-center" />}
    <div className="flex flex-row">
      <div className="flex flex-col h-full items-center">
        <img src={comment.user.profilePicture} className="object-contain w-14"/>
      </div>
      <div className="mt-1 flex flex-col">
        <div className="flex flex-row space-x-2">
          <span>{comment.user.name}</span>
          {comment.tags.map((tag) => {
            const sector = sectors.find((value) => value.name = tag);
            return <div key={sector.name + Math.random()} className={`font-sans w-max ${sector.color} text-xs text-white rounded-3xl px-5 py-2`}>{tag}</div>
          })}
        </div>
        <div className="mt-5">
          <span className="font-sans">{comment.message}</span>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <span>{comment.likes > 999 ? `${(comment.likes / 1000)}k` : comment.likes}</span>
          <span>{comment.views > 999 ? `${(comment.views / 1000)}k` : comment.views}</span>
          <span>{comment.replies > 999 ? `${(comment.replies / 1000)}k` : comment.replies} Comments</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  </div>;
}