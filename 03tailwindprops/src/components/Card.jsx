import React from 'react'

function Card({username, position='CSE Engineer'}) {
    // console.log(props);
    console.log(username);
    console.log(position);
  return (
     <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-5">
  <img className="w-25 h-25 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/38709603/pexels-photo-38709603.jpeg" alt="" width="600" height="600"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
       {position}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card