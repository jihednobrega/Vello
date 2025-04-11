'use client'

import {
  RadialBarChart,
  RadialBar,
  PolarRadiusAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import { useId } from 'react'

type RadialChartProps = {
  id: string
  value: number
  maxValue?: number
  label?: string
  highlightColor: string
}

export function RadialChart({
  value,
  maxValue = 10,
  label,
  highlightColor,
}: RadialChartProps) {
  const chartData = [
    {
      name: label,
      value: value,
      space: 0.1,
      background: maxValue - value,
    },
  ]

  const isGreen = highlightColor === '#2ed300'
  const barFill = isGreen ? '#e4ffd4' : '#d4fffe'
  const shadowFlood = highlightColor

  const id = useId()
  const shadowFilterId = `innerShadow-${id}`

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={400} className="mt-44">
        <RadialBarChart
          data={chartData}
          innerRadius={150}
          outerRadius={230}
          startAngle={180}
          endAngle={0}
          barCategoryGap={0}
        >
          <PolarRadiusAxis domain={[0, maxValue]} tick={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 50}
                        className=" dark:fill-white text-6xl fill-[#202831] font-['Space_Grotesk'] font-medium"
                      >
                        {value.toLocaleString('pt-BR')}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 20}
                        className="fill-[#61656c] text-sm dark:fill-zinc-300"
                      >
                        {label}
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>

          <defs>
            <filter
              id={shadowFilterId}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="0 1" />
              </feComponentTransfer>

              <feGaussianBlur stdDeviation="5" result="blurred" />
              <feOffset dx="0" dy="0" result="offsetBlur" />

              <feFlood
                flood-color={shadowFlood}
                flood-opacity="1"
                result="color"
              />
              <feComposite
                in="color"
                in2="offsetBlur"
                operator="in"
                result="innerShadow"
              />

              <feComposite
                in="innerShadow"
                in2="SourceGraphic"
                operator="atop"
                result="final"
              />
            </filter>
            <filter
              id="innerBlackShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="0 1" />
              </feComponentTransfer>

              <feGaussianBlur stdDeviation="12" result="blurred" />
              <feOffset dx="0" dy="0" result="offsetBlur" />

              <feFlood flood-color="white" flood-opacity="1" result="color" />
              <feComposite
                in="color"
                in2="offsetBlur"
                operator="in"
                result="innerShadow"
              />

              <feComposite
                in="innerShadow"
                in2="SourceGraphic"
                operator="atop"
                result="final"
              />
            </filter>
          </defs>

          <RadialBar
            dataKey="value"
            stackId="a"
            cornerRadius={8}
            fill={barFill}
            filter={`url(#${shadowFilterId})`}
          />

          <RadialBar
            dataKey="space"
            stackId="a"
            cornerRadius={0}
            fill="transparent"
            animationBegin={1400}
          />

          <RadialBar
            dataKey="background"
            stackId="a"
            cornerRadius={8}
            fill="#cccccc"
            animationBegin={1400}
            filter="url(#innerBlackShadow)"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}
