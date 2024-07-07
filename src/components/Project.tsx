import Image from "next/image";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className=" mx-auto p-4">
      {/* image part */}
      <div className="relative overflow-hidden group rounded-lg">
        <Image src={imageUrl} alt="Picture of the author" layout="responsive" width={500} height={500} className="z-10 object-cover" />
        {/* overlay */}
        <div className="absolute inset-0 bg-emerald-200 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-20"></div>
        {/* content part */}
        <div className="absolute top-[-50%] left-2 group-hover:top-2 duration-500 transition-all z-30">
          <p className="bg-emerald-500 text-white font-extrabold mb-4 rounded-full inline px-3 py-1 text-sm">CategoryName</p>
        </div>
        <div className="absolute bottom-[-50%] sm:bottom-[-70%] group-hover:bottom-2 z-30 transition-all duration-500 left-2">
          <h1 className="text-lg sm:text-2xl font-bold text-white">Project Name</h1>
          <p className="text-xs sm:text-sm text-white w-fit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos.</p>
        </div>
      </div>
    </div>
  );
}
