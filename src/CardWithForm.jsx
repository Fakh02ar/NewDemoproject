import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CardWithForm({ image, title, description, price }) {
  return (
    <Card className="bg-black rounded-[20px] text-white overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-110 cursor-pointer flex flex-col h-[420px] border-0">
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover"
        />
      </div>

      <CardHeader>
        <CardTitle className='text-white text-[20px] font-[600] leading-[24px]'>{title}</CardTitle>
        <CardDescription className='flex'>
          <div className="flex justify-between items-start py-6">
            <p className="text-[14px] leading-[21px] font-[100] text-[rgba(255,255,255,.75)] flex-1 mr-5 line-clamp-3">
              {description}
            </p>
            <div className="text-right flex flex-col">
              <span className="text-sm text-white font-[600]">From</span>
              <span className="text-lg font-semibold -mt-1 text-white">${price}</span>
            </div>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Optional extra content */}
      </CardContent>
    </Card>
  )
}
