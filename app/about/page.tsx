import Image from "next/image";

export default function About()
{
    return(
        // option 2 
        // <div className="flex flex-col items-center">
        //     <h1 className="text-6xl pt-15 text-[#b87956] font-serif tracking-wide">
        //         ABOUT US
        //     </h1>

        //     <div className="w-px h-8 bg-black mt-4" />

        //     <div className="w-1/2 border-10">
        //         <Image
        //             src="/group.jpg"
        //             alt="Group photo"
        //             width={500}
        //             height={500}
        //             className="w-full object-cover"
        //        />
        //     </div>
        // </div>

        // option 1
        <div>
            <div className=" px-25 py-15 w-full bg-[#b87956]">
                <div className="mx-auto max-w-5xl flex items-center gap-12 px-6">
                    <div className="w-1/2 border-10">
                        <Image
                            src="/group.jpg"
                            alt="Group photo"
                            width={500}
                            height={500}
                            className=" aspect-square w-full object-cover"
                        />
                    </div>
                    <div className="w-1/2 pt-50">
                        <h2 className="text-4xl font-bold mb-4">
                            Who are we?
                        </h2>
                        <p className="text-base leading-relaxed text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                            massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                            vitae mattis tellus.
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-25 py-15 flex justify-center w-full text-[#86bbd8] bg-[#ffcb77]">
                <div className="max-w-5xl w-full">
                    <h1 className="font-bold text-4xl text-center mb-10">
                    A Letter from Our Founders
                    </h1>

                    <div className="flex">
                    <p className="m-10 w-1/2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. 
                    </p>

                    <div className="w-1/2 m-10 border-10">
                        <Image
                        src="/group.jpg"
                        alt="Group photo"
                        width={300}
                        height={300}
                        className="w-full"
                        />
                    </div>
                    </div>
                </div>
                </div>

        </div>
    );
}