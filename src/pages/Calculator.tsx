import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { Painel } from '../components/Calculator/Painel'
import { MethodSelection } from '../components/Calculator/MethodSelection'
import { CalculateMethod } from '../components/Calculator/CalculateMethod'
import { Result } from '../components/Calculator/Result'

export function Calculator() {
  const [visibleContent, setVisibleContent] = useState<'calculator' | 'painel'>(
    'calculator',
  )

  const handleContentToggle = (content: 'calculator' | 'painel') => {
    setVisibleContent(content)
  }

  return (
    <div className="w-full bg-white rounded-[1.25rem] dark:bg-zinc-800 relative overflow-hidden">
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2 px-[2.0625rem]">
          <img src="/assets/calculator.svg" />
          <span className="text-lg text-[#282828] font-medium dark:text-zinc-300">
            Calculadora
          </span>
        </div>

        <div className="h-11 w-1/2 max-w-[34,375rem] bg-[#f4f4f4] p-1 border border-[#eeeeee] rounded-xl dark:bg-zinc-500 dark:border-zinc-400">
          <div className="h-full relative flex justify-center items-center">
            <label className="px-2 flex justify-center gap-2 w-1/2 cursor-pointer">
              <input
                type="radio"
                id="calculator-content"
                name="visibleContent"
                className="hidden"
                checked={visibleContent === 'calculator'}
                onChange={() => handleContentToggle('calculator')}
              />
              <span
                className={`${visibleContent !== 'painel' ? '' : 'opacity-50'} z-10 font-medium`}
              >
                Calculadora
              </span>
            </label>

            <label className="px-2 flex justify-center gap-2 w-1/2 cursor-pointer">
              <input
                type="radio"
                id="painel-content"
                name="visibleContent"
                className="hidden"
                checked={visibleContent === 'painel'}
                onChange={() => handleContentToggle('painel')}
              />
              <span
                className={`text-[#282828] z-10 font-medium ${visibleContent === 'painel' ? '' : 'opacity-50'}`}
              >
                Painel
              </span>
            </label>

            <span
              className={`absolute w-1/2 h-full top-0 left-0 transition-transform duration-300 ease-in-out rounded-lg shadow bg-white border border-zinc-200 cursor-pointer ${visibleContent === 'painel' ? 'translate-x-full' : ''} dark:bg-zinc-300`}
            ></span>
          </div>
        </div>
      </div>

      <div className="px-4 border-t border-t-[#e4e9e9] dark:border-zinc-600 ">
        {visibleContent === 'calculator' ? (
          <Routes>
            <Route index element={<MethodSelection />} />
            <Route path="calculate" element={<CalculateMethod />} />
            <Route path="calculate/result" element={<Result />} />
          </Routes>
        ) : (
          <Painel />
        )}
      </div>
    </div>
  )
}
