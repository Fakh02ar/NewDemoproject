import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredShows } from './lib/show';

export default function CardWithForm() {
  return (
    <>
      {featuredShows.map((show) => (
        <Card
          key={show.id}
          className="bg-black rounded-[20px] text-white overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer flex flex-col h-[420px] border-0"
        >
          <img
            src={show.img_src}
            alt={`Image for ${show.title}`}
            className="w-full h-[200px] object-cover"
          />

          <CardHeader>
            <CardTitle className="text-white text-[20px] font-[600] leading-[24px]">
              {show.title}
            </CardTitle>
            <CardDescription className="flex">
              <div className="flex justify-between items-start py-6 w-full">
                <p className="text-[14px] leading-[21px] font-[100] text-[rgba(255,255,255,.75)] flex-1 mr-5 line-clamp-3 not-italic">
                  {show.short_description.replace(/<[^>]*>/g, '')}
                </p>
                <div className="text-right flex flex-col">
                  <span className="text-sm text-white font-[600]">From</span>
                  <span className="text-lg font-semibold -mt-1 text-white">
                    ${show.sale_price}
                  </span>
                </div>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-500">
              {/* Optional extra content or call to action */}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
