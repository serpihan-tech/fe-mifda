import Text from "@/components/atoms/Text"
import {
  LayoutCard,
  Card,
  CardTitle,
  CardContent
} from "@/components/organisms/Card"
export function CardPendaftaran(props) {
  const { data } = props
  return (
    <LayoutCard>
      {
        data.map((item) => (
          <Card>
            <CardTitle title={item.title} subtitle={item.subtitle} typeFlex={'flex-col-reverse'} />
            <CardContent>
              <div className="flex w-full justify-between">
                {
                  item.recap ?
                    Object.entries(item.recap).map(([key, value]) => (
                      key !== 'total' ? 
                      <div className="p-2 rounded-md" key={key}>
                        <Text className="text-xs">{key}</Text>
                        <Text className="font-semibold">{value}</Text>
                      </div>
                      : 
                      <div className="bg-[#146168] p-2 rounded-md text-white" key={key}>
                        <Text className="text-xs">{key}</Text>
                        <Text className="font-semibold">{value}</Text>
                      </div>
                    ))
                    : null
                }
              </div>
            </CardContent>
          </Card>
        ))
      }
    </LayoutCard>
  )
}