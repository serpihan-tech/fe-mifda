import { 
  LayoutCard,
  Card,
  CardTitle,
  CardContent
} from "@/components/organisms/Card";

import Text from "@/components/atoms/Text";

export function CardPemasukan(props) {
  const { data } = props;
  const rupiah = (amount) => data
    ? new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(amount)
    : null;

  return (
    <LayoutCard>
      {
        data.map((item) => (
          <Card>
            <CardTitle title={item.title} subtitle={item.subtitle} typeFlex={'flex-col-reverse'} />
            <CardContent>
              <div className="flex w-full justify-between">
                <div className="p-2 rounded-md">
                  <Text className="font-semibold">{rupiah(item.amount)}</Text>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </LayoutCard>
  );
}