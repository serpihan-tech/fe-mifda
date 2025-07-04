'use client';
import Text from '../atoms/Text';

export function LayoutCard(props) {
  return (
    <div className="w-full flex flex-row rounded-md gap-4">
      {props.children}
    </div>
  );
}

export function CardTitle(props) {
  return (
    <div className={`space-y-1 ${props.typeFlex? `flex ${props.typeFlex}`: "flex"}`}>
      <div className="text-sm font-semibold text-gray-800">
        <Text>
          {props.title}
        </Text>
      </div>
      {
        props.subtitle?
        <div className="text-xs text-gray-500">
          <Text>
            {props.subtitle}
          </Text>
        </div>
        : null
      }
    </div>
  );
}

export function Card(props) {
  return (
    <div className="w-full h-fit gap-4 bg-[#f2fffa] p-6 shadow-sm rounded-md">
      {props.children}
    </div>
  );
}

export function CardContent (props) {
  return (
    <div className={`font-semibold h-fit`}>
      {props.children}
    </div>
  );
}