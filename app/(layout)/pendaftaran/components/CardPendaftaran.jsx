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
            <CardTitle title={item.title} />
            <CardContent>{item.amount}</CardContent>
          </Card>
        ))
      }
    </LayoutCard>
  )
    }